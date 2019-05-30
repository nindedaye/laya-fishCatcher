import Tween = laya.utils.Tween;
import { Global } from "../../Global";
import { CannonManager } from "./CannonManager";
export class CannonFather extends Laya.Sprite{
    private static instance:CannonFather;
    public static getInstance():CannonFather{
        if(this.instance == null){
            this.instance = new CannonFather;
        }
        return this.instance;
    }
    public MIN_TYPE:number = 1;//最小类型
    public MAX_TYPE:number = 7;//最大类型
    public animationBody:laya.display.Animation;//动画容器
    public shootTime:number = 0;//记录上次发射时间
    public shootInterval:number = 250;//发射间隔 ms
    
    public selfWidth:number = 0;//内容宽高
    public selfHeight:number = 0;
    
    public xiuVal:number = 25;//中心点修正值
    public effectBody:laya.display.Animation;

	private strongIng:Boolean = false;//是否增强中
	private _strongTime:number = 0;//增强时间
    
    private time:Laya.Timer;
    private _type:number = 0
    public strongScale:number = 1;
    constructor(){
        super();
        this.CannonFather();
    };

    public get type():number{
        return this._type;
    }

    public set type(val:number){
        this._type = val;
        this.animationBody.play(0, false, "cannon_normal_" + this._type);
        this.animationBody.pos(-35, -90);

        this.selfWidth = this.animationBody.getBounds().width;
        this.selfHeight = this.animationBody.getBounds().height;//中心点修正
    }

    public get strongTime():number{
        return this._strongTime;
    }

    public set strongTime(val:number){
        this._strongTime = val;
        this._strongTime = Math.max(0, this._strongTime);
        if (this._strongTime == 0){
            this.strongIng = false;
            this.time.clear(this, this.loop);
            this.showflash(false);
            Global.getInstance().shootInterTime = 1;
            Global.getInstance().shootPower 
        }else if (!this.strongIng){
            this.time.clear(this, this.loop);
            this.time.loop(1000, this, this.loop);
            this.strongIng = true;
            this.showflash(true);
            Global.getInstance().shootInterTime = 0.5;
            Global.getInstance().shootPower = 2;
        }
    }

    public CannonFather(){
        this.initData();
        this.initView();
        this.initEvent();
    }

    protected initData(){
        this.time = new Laya.Timer();
    }

    private loop(){
        this.strongTime--;
    }

    protected initView(){
        if(!this.animationBody){
            this.animationBody = new laya.display.Animation();
            this.addChild(this.animationBody);
        }

        if(!this.effectBody){
            this.effectBody = new laya.display.Animation();
            this.addChild(this.effectBody);
        }
    }

    protected initEvent(){

    }

    public shootAn(){
        this.animationBody.play(0, false, "cannon_shoot_" + this.type);
    }

    public rotateAn(rotate:number){
        this.rotation = rotate;
        //var tween:Tween = new Tween();
			//tween.to(this, { rotation:rotate }, 100, Ease.cubicOut, Handler.create(this, function() { 
				//tween.clear();
			//} ));
    }

    public showflash(boo:Boolean){
        if(boo){
            this.strongScale = 1.3;
            this.effectBody.play(0, true, CannonManager.getInstance().EFFECT_FLASH);
            this.effectBody.pos(-this.effectBody.getBounds().width/2 - 10, -this.effectBody.getBounds().height/2-20);
            Tween.to(this, {scaleX:this.strongScale, scaleY:this.strongScale}, 200, laya.utils.Ease.backOut);
        }else{
            this.strongScale = 1;
            this.effectBody.clear();
            Tween.to(this, {scaleX:this.strongScale, scaleY:this.strongScale}, 200, laya.utils.Ease.backIn);
        }
    }
}