import { ui } from "../ui/layaMaxUI";
import { Game } from "../Game"
import Tween = laya.utils.Tween;
import Ease = laya.utils.Ease;
export class LoadingView extends ui.LoadingViewUI{
    private static instance:LoadingView;
    private start = this.getChildByName("start") as Laya.Button;
    private dot = this.getChildByName("dot") as Laya.Image;
    private tw:number = 360;
    public static getInstance():LoadingView{
        if(this.instance == null){
            this.instance = new LoadingView();
        }
        return this.instance;
    }
    private Ld:Laya.Sprite;
    constructor(){
        super();
        this.init();
    }

    init(){
        this.start.visible = false;
        this.start.once(Laya.Event.CLICK, this, this.startHand);
    }

    private startHand(){
        Tween.to(this, {alpha:0}, 120, Ease.strongOut, Laya.Handler.create(this, function(){
            this.event("startgame")
        }))
    }

    public setData(val:number){
        this.dot.width = val * this.tw;
        if(val >= 1){
            this.start.visible = true;
        }
    }

}