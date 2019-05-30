import Tween = laya.utils.Tween;
import ease = laya.utils.Ease;
export class Coin extends Laya.Sprite{
    private static instance:Coin;
    public static getInstance():Coin{
        if(!this.instance){
            this.instance =new Coin;
        }
        return this.instance;
    }
    public MOVE_END:string = "move_end";//移动结束
    private _type:string = "";//类型 金币 银币
    public animationBody:laya.display.Animation;
    constructor(){
        super();
        this.initView();
    }

    public get type():string{
        return this._type;
    }

    public set type(ts:string){
        this._type = ts;
        this.animationBody.play(0, true, this._type);
        this.animationBody.pos(-this.animationBody.getBounds().width/2, -this.animationBody.getBounds().height/2);
        this.size(this.animationBody.getBounds().width, this.animationBody.getBounds().height);
    }

    protected initView(){
        if(!this.animationBody){
            this.animationBody = new laya.display.Animation();
            this.addChild(this.animationBody);
        }
    }

    public moveToPos(xx:number, yy:number, delay:number){
        Laya.timer.once(delay, this, function(){
            Tween.to(this, {x:xx,y:yy}, 200, ease.linearIn, new Laya.Handler(this, function(){
                this.event(this.MOVE_END, [this]);
            }))
        })
    }
}