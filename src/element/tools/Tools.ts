import Animation = laya.display.Animation;
import Tween = laya.utils.Tween;
import Point = laya.maths.Point;
import Rectangle = laya.maths.Rectangle;
import Ease = laya.utils.Ease;
import { Global } from "../../Global";
export class Tools extends Laya.Sprite{
    private static instance:Tools;
    public static getInstance():Tools{
        if(!this.instance){
            this.instance = new Tools;
        }
        return this.instance;
    }

    public DEAD_OVER:string = "dead_over";//死亡动画播放完成
    public DEADED:string = 'deaded';//死亡
    public DEAD_SELF:string = 'dead_self';//自毁
    private deadSelfTime:number = 10000;
    public deaded:Boolean = false;
    private anBody:Animation;
    public normalAn:string;
    public deadAn:string;
    private _type:number;//类型
    private selfWidth:number;
    private selfHeight:number;

    //获取碰撞矩形区域修正值
    public xval:number = 0;
    public yval:number = 0;
    public wval:number = 0;
    public hval:number = 0;
    constructor(){
        super();
        this.Tools();
    }

    public get type():number{
        return this._type;
    }
    public set type(val:number){
        this._type = val;
        
        this.anBody.play(0, true, this.normalAn);
        this.anBody.pos( -this.anBody.getBounds().width / 2, -this.anBody.getBounds().height / 2);
        
        this.selfWidth = this.anBody.getBounds().width;
        this.selfHeight = this.anBody.getBounds().height;
        
        //this.graphics.drawRect( -selfWidth / 2+xval, -selfHeight / 2+yval, selfWidth-wval, selfHeight-hval,"#ff0000");
    }

    public Tools(){
        this.anBody = new Animation();
        this.addChild(this.anBody)
    }

    /**
     * 初始化
     */
    public init(){
        this.deaded = false;
        this.scale(0, 0);
        Tween.to(this, {scaleX:2, scaleY:2}, 150, Ease.backOut, Laya.Handler.create(this, function(){
            Tween.to(this, {scaleX:1, scaleY:1}, 150, Ease.backIn);
        }))
        this.deadSelfH();
    }

    /**
     * 开始自毁
     */
    public deadSelfH(){
        Laya.timer.once(this.deadSelfTime, this, this.dh);
    }

    private dh(){
        this.deaded = true;
        this.deadSelfS();
    }

    /**
     * 自毁操作
     */
    private deadSelfS(){
        Tween.to(this, {scaleX:0, scaleY:0}, 200, Ease.backIn, Laya.Handler.create(this, function(){
            this.event(this.DEAD_SELF, [this])
        }));
    }

    /**
     * 死亡
     */
    public disposeS(){
        Global.getInstance().ISPAUSE = true;
        this.deaded = true;
        this.anBody.play(0, false, this.deadAn);
        Laya.timer.clear(this, this.dh);
        this.anBody.on(Laya.Event.COMPLETE, this, this.deadAnCom);
        this.event(this.DEADED, [this]);
    }

    /**
     * 死亡动画播放完
     */
    private deadAnCom(){
        this.removeSelf();
        this.event(this.DEAD_OVER, [this]);
    }

    /**
     * 获取碰撞矩形
     */
    public getHitRectangle():Rectangle{
        var global:Point = this.localToGlobal(new Point(-this.selfWidth/2, -this.selfHeight/2), true);
        var rec:Rectangle = new Rectangle(global.x+this.xval, global.y+this.yval, this.selfWidth-this.wval, this.selfHeight-this.hval);
        return rec
    }
}