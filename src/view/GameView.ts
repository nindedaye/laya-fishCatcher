import { ui } from "../ui/layaMaxUI";
import { CannonFather } from "../element/cannon/CannonFather";
import { CannonManager } from "../element/cannon/CannonManager";
import { Global } from "../Global";
import { DataProxy } from "../data/DataProxy";
import { BulletVo } from "../data/BulletVo";
import { ScoreView } from "../element/view/ScoreView";
import { TipsData } from "../util/tips/TipsData";
import { CustomTips } from "../util/tips/CustomTips";
import { BulletFather } from "../element/bullet/BulletFather";
import { BulletManager } from "../element/bullet/BulletManager";
import { FishManager } from "../element/fish/FishManager";
import { FishFather } from "../element/fish/FishFather";
import { LoadingView } from "./LoadingView";
import Point = laya.maths.Point;
import TimeLine = laya.utils.TimeLine;
import SoundManager = laya.media.SoundManager;
import { CoinManager } from "../element/coin/CoinManager";
import { Tools } from "../element/tools/Tools";
import { ToolsManager } from "../element/tools/ToolsManager";
export class GameView extends ui.GameViewUI{
    private static instance:GameView;
    public static getInstance():GameView{
        if(this.instance == null){
            this.instance = new GameView();
            return this.instance;
        }
    }
    public Gv:GameView;
    private cannon:CannonFather;//大炮
    private _cannonType:number = 0;//大炮类型

    private bulletArr:Array<any> = [];//子弹数组
    private deadBullet:Array<any> = [];//死亡子弹
    private fishArr:Array<any> = [];//鱼数组
    private coinNum = this.getChildByName("player1").getChildByName("coinNum");
    private btn_pre = this.getChildByName("player1").getChildByName("cannon").getChildByName("btn_pre");
    private btn_next = this.getChildByName("player1").getChildByName("cannon").getChildByName("btn_next");
    constructor(){
        super();
        this.initData();
        this.initView();
        this.initEvent();
    }

    private initData(){
        CannonManager.getInstance().cacheAnimation();
        BulletManager.getInstance().cacheAnimation();
        FishManager.getInstance().cacheAnimation();
        CoinManager.getInstance().cacheAnimation();
        ToolsManager.getInstance().cacheAnimation();
    }

    private initView(){
        this.cannon = CannonManager.getInstance().createCannon(this, 295, 694);
        this.cannonType = 5;
        this.coinNum.text = 1000;

        Global.getInstance().lvlnum = 1;

        this.createFish(Global.getInstance().totalFishNum);
    }

    public get cannonType():number{
        return this._cannonType;
    }

    public set cannonType(val:number){
        this._cannonType = val;
        this._cannonType = Math.min(Math.max(this._cannonType, CannonFather.getInstance().MIN_TYPE), CannonFather.getInstance().MAX_TYPE);
        this.cannon.type = this._cannonType;
    }

    private initEvent(){
        this.on(Laya.Event.MOUSE_DOWN, this, this.DownHand);
        this.btn_pre.on(Laya.Event.MOUSE_DOWN, this, this.powBtnHand);
        this.btn_next.on(Laya.Event.MOUSE_DOWN, this, this.powBtnHand);

        Laya.timer.frameLoop(1, this, this.loopHand);
    }

    /**
     * 循环函数
     */
    private loopHand(){
        this.checkHitFish2();
        this.checkHitTools();
    }

    /**
     * 子弹碰撞到鱼
     */
    private checkHitFish2():void{
        var bullet:BulletFather;
        var fish:FishFather;
        var i = 0;
        var j = 0;
        var frect:Laya.Rectangle;
        for (i = 0; i < this.bulletArr.length; i++){
            bullet = this.bulletArr[i];
            if (!bullet || !bullet.parent) continue;
            for (j = 0; j < this.fishArr.length; j++){
                fish = this.fishArr[j];
                if (!fish || !fish.parent) continue;
                frect = fish.getHitRectangle();
                if (!bullet.isHitFish && !bullet.deaded && !fish.dead){
                    if (this.checkOver(frect, bullet)) {
                        bullet.isHitFish = true;
                        fish.hp -= this.getBulletHard(bullet)*Math.random()*5;	
                    }
                }
            }
        }
    }

    /**
     * 子弹碰撞道具
     */
    private checkHitTools(){
        var bullet:BulletFather;
        var tool:Tools
        var i = 0;
        var j = 0;
        var frect:laya.maths.Rectangle;
        for (i = 0; i < this.bulletArr.length; i++){
            bullet = this.bulletArr[i];
            if (!bullet || !bullet.parent) continue;
            for (j = 0; j < ToolsManager.getInstance().toolArr.length; j++){
                tool = ToolsManager.getInstance().toolArr[j];
                if (!tool || !tool.parent) continue;
                frect = tool.getHitRectangle();
                if (!bullet.isHitTool && !bullet.deaded && !tool.deaded){
                    if (this.checkOver(frect,bullet)){
                        bullet.isHitTool = true;
                        tool.disposeS();
                    }
                }
            }
        }
    }

    /**
     * 检查是否相交
     * @param	fullet
     * @param	fish
     */
    private checkOver(frect:Laya.Rectangle,bullet:BulletFather):Boolean{
        var bc:Point = bullet.getCenter();
        var br:number = bullet.hitRadius;
        var xv:number = 10;//修正范围
        var p1:Point = new Point(frect.x+xv, frect.y+xv);
        var p2:Point = new Point(frect.x+xv + frect.width-xv*2, frect.y+xv);
        var p3:Point = new Point(frect.x+xv, frect.y+xv+frect.height-xv*2);
        var p4:Point = new Point(frect.x+xv + frect.width-xv*2, frect.y+xv + frect.height-xv*2);
        
        var arr4:Array<any> = this.getNode(p1, p2, bc, br)
        var arr3:Array<any> = this.getNode(p1, p3, bc, br);
        var arr2:Array<any> = this.getNode(p2, p4, bc, br);
        var arr1:Array<any> = this.getNode(p3, p4, bc, br);
        
        
        var arr:Array<any> = arr1.concat(arr2).concat(arr3).concat(arr4);
        var boo:Boolean = false;
        
        return this.isOver(frect,arr);
    }

    /**
		 * 返回线跟圆的交点
		 * @param	p1  点1
		 * @param	p2  点2
		 * @param	c   圆心
		 * @param	r   半径
		 * @return  两个交点
		 */
		private getNode(p1:Point, p2:Point, c:Point, r:number):Array<any>{
			var x1:number;
			var x2:number;
			var y1:number;
			var y2:number;
			
			var po1:Point = new Point(0,0);
			var po2:Point = new Point(0,0);
			if (p2.x - p1.x == 0){
				x1 = p1.x;
				x2 = p1.x;
				y1 = Math.pow(r*r-Math.pow((p1.x-c.x),2),1/2)+c.y;//下面点
				y2 = -Math.pow(r*r-Math.pow((p1.x-c.x),2),1/2)+c.y;//上面点
			}else{
				var k:number = (p2.y-p1.y)/(p2.x-p1.x);
				var b:number = p1.y-(p2.y-p1.y)/(p2.x-p1.x)*p1.x;
				var m:number = b-c.y;
				var val = -2*m*k*c.x- k*k*c.x*c.x+k*k*r*r-m*m+r*r;
				x1 = ((c.x-m*k)- Math.pow(val,1/2))/(k*k+1)//左边点
				y1 = k*x1+b;
				
				x2 = ((c.x-m*k)+ Math.pow(val,1/2))/(k*k+1)//右边点
				y2 = k*x1+b;
			}
			
			po1.setTo(x1, y1);
			po2.setTo(x2, y2);

			return [po1,po2];
		}


    /**
     * 是否包含集合中的任意一个点
     * @param	frect
     * @param	parr
     * @return
     */
    private isOver(frect:Laya.Rectangle,parr:Array<any>):Boolean{
        for (var i = 0; i < parr.length; i++){
            var p:Point = parr[i];
            if (frect.contains(p.x, p.y)){
                return true;
            }
        }
        return false;
    }

    private powBtnHand(e:Laya.Event){
        // e.stopPropagation();
        if(e.currentTarget == this.btn_pre){
            this.cannonType--;
        }else{
            this.cannonType++;
        }
        laya.media.SoundManager.playSound("res/sound/ChangeGun.wav");
    }

    private DownHand(e:Laya.Event){
        if(Global.getInstance().ISPAUSE)return;

        if(this.mouseY <= Global.getInstance().totalHeight - Global.getInstance().bottomSpace){
            if(!this.checkCanShoot(DataProxy.getInstance().getDataByType(this.cannon.type))){
                return;
            }

            var time:number = laya.utils.Browser.now();
            if(time>this.cannon.shootTime*Global.getInstance().shootInterTime){
                var disy:number = (this.mouseY - this.cannon.y);
                var disx:number = (this.mouseX - this.cannon.x);
                this.cannon.rotateAn(Math.atan2(disy, disx)*180/Math.PI + 90);
                this.cannon.shootTime = time + this.cannon.shootInterval;
                this.cannon.shootAn();

                var bullet:BulletFather = BulletManager.getInstance().createBulletByType(this.cannon.type);
                var angle:number = this.cannon.rotation - 90;
                bullet.pos(this.cannon.x + Math.cos(angle*Math.PI/180)*this.cannon.selfHeight,this.cannon.y+Math.sin(angle*Math.PI/180)*this.cannon.selfHeight);
                bullet.rotation = this.cannon.rotation;
                this.addChild(bullet);
                bullet.init();
                this.coinNum.text = Number(this.coinNum.text) - bullet.dataVo.power;

                bullet.once(BulletFather.getInstance().BOOM_COM, this, this.bulletBoom);
                this.bulletArr.push(bullet);
            }
        }
    }

    /**
     * 子弹爆炸
     * @param bullet 
     */
    public bulletBoom(bullet:BulletFather){
        // this.boomCheckHit(bullet);
        // this.boomCheckHitTool(bullet);

        var index:number = this.bulletArr.indexOf(bullet);
        this.bulletArr.splice(index, 1);

        bullet.removeSelf();
        bullet.deaded = true;
        BulletManager.getInstance().recoverBullerByType(bullet);
    }

    // /**
    //  * 子弹爆炸二次检测碰撞 交点碰撞，相对矩形精确一些
    //  * @param	bullet
    //  */
    // private boomCheckHitTool(bullet:BulletFather):void{
    //     var tool:Tools
    //     var j = 0;
    //     var frect:Laya.Rectangle;
    //     for (j = 0; j < ToolsManager.instance().toolArr.length; j++){
    //         tool = ToolsManager.instance().toolArr[j];
    //         if (!tool || !tool.parent) continue;
    //         frect = tool.getHitRectangle();
    //         if (!tool.deaded){
    //             if (this.checkOver(frect, bullet)){
    //                 tool.disposeS();
    //             }
    //         }
    //     }
    // }

    /**
		 * 子弹爆炸二次检测碰撞 交点碰撞，相对矩形精确一些
		 * @param	bullet
		 */
		// private boomCheckHit(bullet:BulletFather):void{
		// 	var fish:FishFather;
		// 	var j = 0;
        //     var frect:Laya.Rectangle;
		// 	for (j = 0; j < this.fishArr.length; j++){
        //         fish = this.fishArr[j];
		// 		if (!fish || !fish.parent) continue;
		// 		frect = fish.getHitRectangle();
		// 		if (!fish.dead){
		// 			if (this.checkOver(frect, bullet)){
		// 				fish.hp -= this.getBulletHard(bullet);
		// 			}
		// 		}
		// 	}
        // }
        
        /**
		 * 获取子弹伤害
		 * @param	bullet
		 * @return
		 */
		private getBulletHard(bullet:BulletFather):number{
			var value:number = bullet.dataVo.power * Global.getInstance().shootPower;
			var ran:number = Math.random();
			var min:number = 2;
			var max:number = 4;
			var bei:number = 1;
			if (ran > 0.9){
				bei = min + Math.floor(Math.random() * max)
				// var crit:CritUtils = new CritUtils(bei);
				// this.addChild(crit);
				// crit.pos(bullet.x, bullet.y);
			}
			
			return value*bei;
		}



    private checkCanShoot(vo:BulletVo):Boolean{
        if(this.coinNum.text - vo.power < 0){
            CustomTips.getInstance().AddTip(this, "能量不足!!", "right", true, 100, 100, 300, false, 60, 3);
            laya.media.SoundManager.playSound("res/sound/crit.mp3")
            return false;
        }
        return true;
    }


    /**
     * 创建鱼
     * @param fishNum
     */
    private createFish(fishNum:number){
        var fish:FishFather;
        var ranVal:number;
        var typeVal:number = 0;
        for(var i = 0; i< fishNum; i++){
            ranVal = Math.random();

            if(ranVal > 0 && ranVal <= 0.92){       //0-5
                typeVal = Math.floor(Math.random()*6);
            }else if (!this.hasFish(10)&&!this.hasFish(11)&&ranVal > 0.92 && ranVal <= 0.94){//10，11
                typeVal = Math.random() > 0.5?10:11;
            }else if (!this.hasFish(6)&&!this.hasFish(7)&&ranVal > 0.94 && ranVal <= 0.96){//6.7
                typeVal = Math.random() > 0.5?6:7;
            }else if (!this.hasFish(9)&&ranVal > 0.96 && ranVal <= 0.98){//8，9
                typeVal = 9;
            }else if (ranVal > 0.98 && !this.hasFish(8)){
                typeVal = 8;
            }

            if (typeVal==9){
                CustomTips.getInstance().AddTip(this, "海底出现鲨鱼，击败它可以获得大量能量哦！！", "warn", true, 100, 100, 300, false, 100, 3);
            }else if (typeVal == 8){
                CustomTips.getInstance().AddTip(this, "海豚出现啦！击败它掉落鱼雷哦！鱼雷只存在10秒钟！", "right", true, 100, 100, 300, false, 100, 3);
            }else if (typeVal == 6){
                CustomTips.getInstance().AddTip(this, "鳄鱼来了！击败它掉落能量宝箱哦！宝箱只存在10秒钟！", "warn", true, 100, 100, 300, false, 100, 3);
            }else if (typeVal == 7){
                CustomTips.getInstance().AddTip(this, "海龟出现！击败它掉落武器增强道具！", "warn", true, 100, 100, 300, false, 100, 3);
            }else if (typeVal == 11) {
                CustomTips.getInstance().AddTip(this, "灯笼鱼出现！击败它掉落鱼饵，鱼饵可以吸引来鱼群哦！", "warn", true, 100, 100, 300, false, 100, 3);
            }

            fish = FishManager.getInstance().createFishById(typeVal);
            this.addChild(fish);
            fish.init(Math.random()>0.5?"right":"left");
            fish.once(FishFather.getInstance().FISH_DEAD, this, this.fishDead);
            
            this.fishArr.push(fish);
        }
    }

    private hasFish(val:number):Boolean{
        var fish:FishFather;
        for(var i=0;i<this.fishArr.length;i++){
            fish = this.fishArr[i];
            if(fish.fishVo.id == val){
                return true;
            }
        }
        return false;
    }

    /**
     * 创建队形
     * @param	flag 0心 1矩形 2菱形 3圆形
     * @param	type 鱼类型
     * @param	dirs 游向 left 向左游
     */
    private createFishOrder(flag:number = 0,type:number=0,dirs:string="left"){
        var pathArr:Array<any>=[];
        var fish:FishFather;
        var p:Point;
        var newp:Point;
        var xiux:number=0;
        var xiuy:number=0;
        switch(flag) {
            case 0:
                pathArr = FishManager.getInstance().heartPathDot();
                if (dirs == "right") {
                    xiux = -600;
                }else {
                    xiux = Global.getInstance().totalWidth+600;
                }
                
                xiuy = 400;
                break;
            case 1:
                pathArr = FishManager.getInstance().rectPathDot();
                if (dirs == "right") {
                    xiux = -600;
                }else {
                    xiux = Global.getInstance().totalWidth+600;
                }
                
                xiuy = 250;
                break;
            case 2:
                pathArr = FishManager.getInstance().rhombPathDot();
                if (dirs == "right") {
                    xiux = -600;
                }else {
                    xiux = Global.getInstance().totalWidth+600;
                }
                
                xiuy = 100;
                break;
            case 3:
                pathArr = FishManager.getInstance().circlePathDot();
                if (dirs == "right") {
                    xiux = -400;
                }else {
                    xiux = Global.getInstance().totalWidth+400;
                }
                
                xiuy = 350;
                break;
        }
        
        var i = 0;
        for (i = 0; i < pathArr.length; i++) {
            p = pathArr[i];
            newp = new Point(p.x + xiux, p.y + xiuy);
            fish = FishManager.getInstance().createFishById(type);
            this.addChild(fish);
            fish.init(dirs,newp,true);
            fish.once(FishFather.getInstance().FISH_DEAD, this, this.fishDead);
            fish.once(FishFather.getInstance().FISH_DEAD_SELF, this, this.fishDeadSelf);
            this.fishArr.push(fish);
        }
    }

    /**
     * 随机创建鱼群
     * @param	count
     */
    private createOrder(count:number = 6):void {
        laya.media.SoundManager.playSound("res/sound/mfish.mp3");
        CustomTips.getInstance().AddTip(this, "鱼群来袭!,鱼群中的鱼有双倍奖励哦！", "right", true, 100, 100, 300, false, 100, 3);
        var time:number = 3000;
        var dir:String = Math.random() > 0.5?"right":"left";
        var timer:laya.utils.Timer;
        var fishtype:number = Math.floor(Math.random() * 4);
        for (var i = 0; i < count; i++) {
            timer = new laya.utils.Timer();
            timer.once(time+i * 3000, this, function() {
                this.createFishOrder(Math.floor(Math.random() * 4), fishtype,dir);
            })
        }
    }

    /**
     * fish dead
     * @param	fish
     */
    private fishDead(fish:FishFather):void{
        var index:number = this.fishArr.indexOf(fish);
        this.fishArr.splice(index, 1);
        
        //队列中的鱼 奖励翻倍 杀死队列中的鱼不创建新鱼
        var val:number = 1;
        if (fish.isInOrder) {
            val = 2;
        }else {
            this.createFish(1);
        }
        CoinManager.getInstance().createMoreCoin(fish, this);
        
        this.coinNum.text = Number(this.coinNum.text) + fish.fishVo.score*val;
        Global.getInstance().getPowerNum += fish.fishVo.score*val;
        // lvlSet();
        
        //掉落鱼雷
        if (fish.fishVo.id == 8){
            this.createTools(1,fish.x,fish.y);
        }else if (fish.fishVo.id == 6){//掉落宝箱
            this.createTools(2,fish.x,fish.y);
        }else if (fish.fishVo.id == 7){//掉落增强道具
            this.createTools(3,fish.x,fish.y);	
        }else if (fish.fishVo.id == 11) {//掉落鱼饵
            this.createTools(4,fish.x,fish.y);	
        }
    }

    /**
     * 创建道具
     * @param type 
     * @param xx 
     * @param yy 
     */
    private createTools(type:number, xx:number, yy:number){
        var tool:Tools = ToolsManager.getInstance().createToolByType(type);
        tool.once(Tools.getInstance().DEAD_OVER, this, this.deadAnOver);
        tool.pos(xx, yy);
        this.addChild(tool);
    }

    private deadAnOver(tool:Tools){
        if (tool.type == 1){
            this.killAllFish();
            //闪屏
            var timeline:TimeLine=new TimeLine();
            timeline
            .addLabel("right", 0).to(this, {alpha:0.1}, 80)
            .addLabel("left",0).to(this, {alpha:1}, 80)
            .addLabel("right2", 0).to(this, {alpha:0.1}, 80)
            .addLabel("left2", 0).to(this, {alpha:1}, 80)
            .addLabel("right3", 0).to(this, {alpha:0.1}, 80)
            .addLabel("left3",0).to(this, {alpha:1}, 80)
            
            timeline.play(0, false);
            timeline.once(Laya.Event.COMPLETE, this, function(){
                timeline.destroy();
                Global.getInstance().ISPAUSE = false;
                this.alpha = 1;
            })
            SoundManager.playSound("res/sound/boom.wav");
        }else if (tool.type == 2){//宝箱
            Global.getInstance().ISPAUSE = false;
            CoinManager.getInstance().addCoin(500, "coin", tool.x, tool.y, this);
            Global.getInstance().getPowerNum += 500;
            this.coinNum.text = Number(this.coinNum.text) + 500;
        }else if (tool.type == 3){//武器道具
            Global.getInstance().ISPAUSE = false;
            //startEffect();
            this.cannon.strongTime = 20;
            CustomTips.getInstance().AddTip(this, "武器增强！！", "warn", true, 100, 100, 300, false, 100, 3);
            SoundManager.playSound("res/sound/bullet_power.mp3");
        }else if (tool.type == 4) {//鱼饵
            Global.getInstance().ISPAUSE = false;
            this.createOrder();
        }
    }

    private killAllFish(){
        var fish:FishFather;
        for(var i=0;i<this.fishArr.length;i++){
            fish = this.fishArr[i];
            fish.hp = 0;
        }
    }

    /**
     * 鱼自己死亡
     * @param	fish
     */
    private fishDeadSelf(fish:FishFather):void {
        var index:number = this.fishArr.indexOf(fish);
        this.fishArr.splice(index, 1);
    }
}