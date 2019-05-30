import Animation = laya.display.Animation;
import Point = laya.maths.Point;
import { BulletVo } from "../../data/BulletVo";
import { Global } from "../../Global";
export class BulletFather extends Laya.Sprite{
    private static instance:BulletFather;
    public static getInstance():BulletFather{
        if(this.instance == null){
            this.instance = new BulletFather();
        }
            return this.instance;
    }
    public BOOM_COM:string = "boom_com";//爆炸结束，在做一次碰撞检测
    private _type:number = 0;
    public harm:number;//伤害
    public hitRadius:number;//碰撞半径
    public deaded:Boolean = false;//子弹是否存活
    
    public sign:string = "";//子弹类型标识
    public flyAn:string = "";//飞行
    public boomAn:string = "";//爆炸
    
    public selfWidth:number = 0;//内容宽高
    public selfHeight:number = 0;
    
    public animationBody:Animation;//动画容器
    public dataVo:BulletVo;//当前类型子弹相关数据
    public hitPoint:Point = new Point();//碰撞中心点（局部坐标
    public isHitFish:Boolean = false;//是否碰到鱼
    public isHitTool:Boolean = false;//是否碰撞到道具

    private tempAngle:number = 0;//临时记录角度

    constructor(){
        super();
        this.initData();
        this.initView();
        this.initEvent();
    };

    protected initData(){};

    protected initView(){
        if(!this.animationBody){
            this.animationBody = new Animation();
            this.addChild(this.animationBody);
        }
    }

    protected initEvent(){}

    public get type():number {
        return this._type;
    }
    public set type(val:number){
        this._type = val;
        this.animationBody.play(0, false, this.flyAn);
        this.animationBody.x = -(this.animationBody.getBounds().width / 2);
        this.animationBody.y = -this.animationBody.getBounds().height+100;
        this.selfWidth = this.animationBody.getBounds().width;
        this.selfHeight = this.animationBody.getBounds().height;//中心点修正
        
        this.hitRadius = this.dataVo.powerRadius;
        this.setHitPoint();
    }

    public setHitPoint(){
        if(this.type == 1){
            this.hitPoint.setTo(0, this.animationBody.y + Global.getInstance().bulletOneValue/2);
        }else{
            this.hitPoint.setTo(0, this.animationBody.y + Global.getInstance().bulletOtherValue/2+30);
        }
    }

    public init(){
        this.deaded = false;
        this.isHitFish = false;
        this.isHitTool = false;
        this.hitRadius = this.dataVo.powerRadius;
        Laya.timer.frameLoop(1, this, this.loopHand)
    }

    private loopHand(){
        if(Global.getInstance().ISPAUSE)return;

        this.tempAngle = this.rotation - 90;
        this.x += Math.cos(this.tempAngle * Math.PI/180) * this.dataVo.speed;
        this.y += Math.sin(this.tempAngle * Math.PI/180) * this.dataVo.speed;

        this.setHitPoint();

        if(this.hitBorder()||this.isHitFish||this.isHitTool){
            this.boom();
            Laya.timer.clear(this, this.loopHand);
        }
    }

    /**
     * 爆炸
     */
    public boom(){
        laya.media.SoundManager.playSound('res/sound/bullet_boom.mp3');
        this.animationBody.play(0, false, this.boomAn);
        this.animationBody.once(Laya.Event.COMPLETE, this, this.boomCom);
    }

    /**
     * 爆炸动画播放完成
     */
    private boomCom(){
        this.hitRadius = this.dataVo.boomRadius;
        this.event(this.BOOM_COM, [this]);
    }

    /**
     * 是否碰撞到边界
     * @return
     */
    public hitBorder():Boolean{
        var global:Point = this.localToGlobal(this.hitPoint, true);
        var val:number = 10;
        if (global.x < val || global.x > Global.getInstance().totalWidth - val || global.y < val || global.y > Global.getInstance().totalHeight-10) {
            return true;
        }
        return false;
    }

    /**
		 * 获取碰撞矩形
		 * @return
		 */
		public getHitRectangle():Laya.Rectangle{
			var global:Point = this.localToGlobal(new Point(this.hitPoint.x-this.hitRadius,this.hitPoint.y-this.hitRadius), true);
			var local:Point = this.globalToLocal(global, true);
            var rec:Laya.Rectangle = new Laya.Rectangle(local.x, local.y, this.hitRadius*2, this.hitRadius*2);
			return rec;
		}
		
		public getCenter():Point{
			var global:Point = this.localToGlobal(this.hitPoint,true);
			return global;
		}
}