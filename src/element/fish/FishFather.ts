import { FishVo } from "../../data/FishVo";
import Animation = laya.display.Animation;
import Label = laya.ui.Label;
import { HpSlider } from "../view/HpSlider";
import { Global } from "../../Global";
export class FishFather extends Laya.Sprite{
    private static instance:FishFather;
    public static getInstance():FishFather{
        if(this.instance == null){
            this.instance = new FishFather;
        }
        return this.instance;
    }

    public FISH_DEAD:string = "fish_dead";//鱼死亡
    public FISH_DEAD_SELF:string = "fish_dead_self";//自身死亡
    public dirStr:string = "";//游向
    public _fishVo:FishVo;//数据

    public animationBody:Animation;//动画主体
    private _id:number

    private _hp:number;
    public selfWidth:number = 0;//内容宽高
    public selfHeight:number = 0;
    public dead:Boolean = false;
    public label:Label;
    public hpSlider:HpSlider;
    public isInOrder:Boolean = false;
    constructor(){
        super();
        this.initData();
        this.initView();
        this.initEvent();
    }
    public get fishVo():FishVo{
        return this._fishVo;
    }

    public set fishVo(vo:FishVo){
        this._fishVo = vo;
    }

    public get id():number{
        return this._id;
    }

    public set id(val:number){
        this._id = val;

        this.animationBody.play(0, true, this.fishVo.leveAn);

        this.selfWidth = this.animationBody.getBounds().width;
        this.selfHeight = this.animationBody.getBounds().height;
        this.animationBody.pivot(this.selfWidth/2, this.selfHeight/2);
        this.animationBody.pos(0, 0);
        // this.hpSlider.slider.width = this.selfWidth;
        // this.hpSlider.slider.height = 5;
        // this.hpSlider.size(this.selfWidth, 5);
        // this.hpSlider.pos(-this.hpSlider.width / 2, -(this.selfHeight-this.fishVo.hitValue)/2);

        var maxHp:number = Math.floor(this.fishVo.blood_min + Math.random() * (this.fishVo.blood_Max - this.fishVo.blood_min));//血量
        // this.hpSlider.max = maxHp;
        this.hp = maxHp;
    }

    public get hp():number{
        return this._hp;
    }

    public set hp(val:number){
        this._hp = val;
        // this.hpSlider.showSelf(this._hp);

        if(this._hp <= 0){
            this.fishDead();
        }
    }

    protected initData(){

    }

    protected initView(){
        if(!this.animationBody){
            this.animationBody = new Animation();
            this.animationBody.interval = 100;
            this.addChild(this.animationBody);
        }
        // this.hpSlider = new HpSlider();
        // this.addChild(this.hpSlider);
    }

    protected initEvent(){

    }

    /**
     * 初始化
     * @param dir  出现位置在屏幕两侧 left right 
     * @param spos 起始坐标，不设置则随机
     */
    public init(dir:string="right", spos:laya.maths.Point=null, order:Boolean=false){
        this.dead = false;
        this.isInOrder = order;
        // this.hp = this.hpSlider.max;
        this.dirStr = dir;
        this.animationBody.rotation = (dir == "right")?0:180

        var times:number;
        if(!spos){
            //打乱出现次序
            times = Math.random()*1000;
            this.resetPos();
        }else{
            times = 1000;
            this.pos(spos.x, spos.y);
        }

        // Laya.timer.once(times, this, function(){
        //     Laya.timer.frameLoop(1, this, this.loopHand);
        // })
        Laya.timer.frameLoop(1, this, this.loopHand);
    }
    

    private loopHand(){
        if(Global.getInstance().ISPAUSE)return;
        this.moveOver();
    };

    private moveOver(){
        if(this.dirStr == "right"){
            this.x += this.fishVo.speed*Global.getInstance().lvlAddValue;
            if(this.x >= Global.getInstance().totalWidth + this.selfWidth){
                if(this.isInOrder){
                    this.selfDed();
                }else{
                    this.resetPos();
                }
            }
        }else if(this.dirStr == "left"){
            this.x -= this.fishVo.speed*Global.getInstance().lvlAddValue;
            if(this.x<=-this.selfWidth*2){
                if(this.isInOrder){
                    this.selfDed();
                }else{
                    this.resetPos();
                }
            }
        }
    }

    /**
     * 重置初始位置
     */
    private resetPos(){
        var startx:number;
        var starty:number = 50 + (Global.getInstance().totalHeight-150)*Math.random();

        if(this.dirStr == "right"){
            startx = -this.selfWidth - Math.random() * 200;
        }else if(this.dirStr == "left"){
            startx = Global.getInstance().totalWidth + this.selfWidth + Math.random()*200;
        }

        this.pos(startx, starty);
    }

    public fishDead(){
        this.dead = true;
        this.animationBody.play(0, false, this.fishVo.deadAn);
        this.animationBody.once(Laya.Event.COMPLETE, this, this.deadCom);
        Laya.timer.clear(this, this.loopHand);
    }

    /**
     * 死亡动画播放完成
     */
    private deadCom(){
        this.removeSelf();
        this.event(this.FISH_DEAD, [this]);
        laya.utils.Pool.recover(this.fishVo.fishInfo, this);
    }

    /**
     * 自身死亡，不是被击中死亡
     */
    private selfDed(){
        this.removeSelf();
        this.event(this.FISH_DEAD_SELF, [this]);
        laya.utils.Pool.recover(this.fishVo.fishInfo, this);
        Laya.timer.clear(this, this.loopHand);
    }

    /**
     * 获取碰撞矩形
     * @return
     */
    public getHitRectangle():laya.maths.Rectangle{
        var global:laya.maths.Point = this.localToGlobal(new laya.maths.Point(-this.selfWidth/2, -this.selfHeight/2+this.fishVo.hitValue), true);
        var rec:laya.maths.Rectangle = new laya.maths.Rectangle(global.x, global.y, this.selfWidth, this.selfHeight - this.fishVo.hitValue*2);
        return rec;
    }
}