import Sprite = laya.display.Sprite;
import Image = laya.ui.Image;
import Label = laya.ui.Label;
import { TipsData } from "./TipsData"
export class CustomTips extends Laya.Sprite{
    private static instance:CustomTips;
    public static getInstance():CustomTips{
        if(this.instance == null){
            this.instance = new CustomTips;
        }
        return this.instance;
    }
    private firstTip:Laya.Sprite;
    private secondTip:Laya.Sprite;
    private opeDelSelf:Boolean = false;
    private exitTime:number = 40;
    private currTime:number = 0;
    private tempW:number = 1;

    constructor(){
        super();
    }

    /**
     * 添加tip
     * @param	container  容器
     * @param	content    内容
     * @param	logoflag   图标
     * @param	isCenter   是否横向居中
     * @param	posy    纵向位置
     * @param	posx    横向位置  
     * @param	antime    动画运动时间 
     * @param	isAllExist  是否不自动消失
     * @param	etime  存在多久自动销毁 20*etime 毫秒
     * @param	logotype  logo类型 = 对错号   1 表情
     * @param	bond  粗体
     * @param	size  字号
     * @param	font  字体
     */

    public AddTip(container:Laya.Sprite, content:string="333434", logoflag:string="right", isCenter:Boolean=true,
                posy:number=150, posx:number=100, antime:number=300, isAllExist:Boolean=false, etime:number = 40, logotype:number=0,
                bond:Boolean=true, size:number=24, font:string="方正卡通简体"){
        this.exitTime = etime;
        if(!container.contains(this)){
            container.addChild(this);
        }

        if(!this.firstTip){
            this.firstTip = this.CreateLogoTip(content, logoflag,logotype,bond,size,font);
            this.an_in(this.firstTip,antime);
            this.add(this, this.firstTip);
            if (this.tempW == -1) {
                this.tempW = this.firstTip.width;
            }
        }else if (!this.secondTip) {
            this.an_out(this.firstTip,antime);
            this.secondTip = this.CreateLogoTip(content, logoflag,logotype,bond,size,font);
            this.add(this,this.secondTip);
            this.an_in_1(this.secondTip,antime);
            this.secondTip.x = this.firstTip.x;
        }
        
        if (isCenter) {
            this.centers(container, posy);
        }else {
            this.pos(posx, posy);
        }
        
        this.
            ///实时检测自毁事件
            currTime = 0;
        if (!this.opeDelSelf && !isAllExist) {
            this.opeDelSelf = true;
            Laya.timer.loop(20,this,this.loopHand)
        }
    }

    /**
     * 清除自己
     */
    private disposSelf(){
        this.tempW = -1;
        this.currTime = 0;
        this.removeSelf();
        Laya.timer.clearAll(this);
    }

    /**
     * 居中
     * @param	container
     * @param	posy
     */
    private centers(container:Sprite,posy:number):void {
        this.pos(container.width / 2, posy);
    }

    /**
     * 检测自毁时间
     */
    private loopHand(){
        this.currTime++; 
        if (this.currTime >= this.exitTime) {
            this.del();
        }
    }

    private del(){
        this.opeDelSelf = false;
        Laya.timer.clearAll(this);
        this.an_dl(this.firstTip);
        this.currTime = 0;
    }

    /**
     * 消除自身
     */
    public disposeSelf(){
        this.del();
    }

    /**
     * 出 动画
     * @param	target
     * @param	anTime
     */
    private an_out(target:Sprite, anTime:number = 400):void {
        target.alpha = 1;
        var timeLine:laya.utils.TimeLine = new laya.utils.TimeLine();
        timeLine.addLabel("aa",0).to(target, { y: -target.height/2 }, anTime, laya.utils.Ease.cubicOut)
                    .addLabel("bb",0).to(target, { alpha:0 }, anTime, laya.utils.Ease.cubicOut);
        timeLine.play(0);
        timeLine.on(Laya.Event.COMPLETE,this,function(){
            timeLine.destroy();
            target.removeSelf();
            target = null;
        })
    }

    /**
     * 自毁动画
     * @param	target
     * @param	anTime
     */
    private an_dl(target:Sprite, anTime:number = 400){
        if (!target) return;
        laya.utils.Tween.to(target,{alpha:0},anTime,laya.utils.Ease.cubicOut,new laya.utils.Handler(this,function(){
            target.removeSelf();
            if (target === this.firstTip) {
                target = null;
                this.firstTip = null;
            }
            
            if (this.firstTip == null && this.secondTip == null) {
                this.disposSelf();
            }
        }))
    }

    /**
     * firstTip动画
     * @param	target
     * @param	anTime
     */
    private an_in(target:Sprite, anTime:number = 400){
        target.alpha = 0;
        laya.utils.Tween.to(target, { alpha:1 }, anTime, laya.utils.Ease.cubicIn);
    }

    /**
     * secondTip 入 动画
     * @param	target
     * @param	anTime
     */
    private an_in_1(target:Sprite, anTime:number = 400){
        target.scaleY = 0;
        var self = this;
        laya.utils.Tween.to(target, {scaleY:1}, anTime, laya.utils.Ease.cubicIn,new laya.utils.Handler(this,function(){
            self.firstTip = self.secondTip;
            self.secondTip = null;
        }));
    }

    /**
     * 添加子对象，自判断
     * @param	father
     * @param	sun
     */
    private add(father:Sprite, sun:Sprite){
        if (sun && !father.contains(sun)) {
            father.addChild(sun);
            sun.pos(sun.width / 2, sun.height / 2);
        }
    }

    /**
     * 创建tip内容
     * @param	content
     * @param	logoflag
     * @param	logotype
     * @param	bond
     * @param	size
     * @param	font
     * @return
     */
    private CreateLogoTip(content: string, logoflag:string = "right",logotype:number=0,bond: Boolean = false,size: number = 22, font: string = "微软雅黑"):Sprite {
        var tipContainer:Sprite = new Sprite();
        
        var infoContaienr:Sprite = new Sprite();
        var logoImg:Image = new Image();
        var bgImg:Image = new Image();
        bgImg.sizeGrid = "33,26,28,30";
        var label:Label = new Label();
        
        label.text = content;
        label.font = font;
        label.fontSize = size;
        label.height = 50;
        
        if (logoflag == "right") {
            logoImg.skin = TipsData.getInstance().logoRightArr[logotype];
            bgImg.skin = TipsData.getInstance().tipRightArr[logotype];	
            label.color = TipsData.getInstance().rightColorArr[logotype];
        }else if (logoflag == "wrong") {
            logoImg.skin = TipsData.getInstance().logoWrongArr[logotype];
            bgImg.skin = TipsData.getInstance().tipWrongArr[logotype];	
            label.color = TipsData.getInstance().wrongColorArr[logotype];
        }else if (logoflag == "warn") {
            logoImg.skin = TipsData.getInstance().logoWarnArr[logotype];
            bgImg.skin = TipsData.getInstance().tipWarnArr[logotype];	
            label.color = TipsData.getInstance().warnColorArr[logotype];
        }
        
        bgImg.size(label.width + 200, 50);
        infoContaienr.width = bgImg.width;
        label.pos((bgImg.width - label.textField.textWidth) / 2, (bgImg.height - label.textField.textHeight) / 2);
        
        tipContainer.addChild(infoContaienr);
        infoContaienr.addChild(bgImg);
        infoContaienr.addChild(label);
        infoContaienr.pos(logoImg.width-1, 0);
        tipContainer.addChild(logoImg);
        tipContainer.size(logoImg.width + bgImg.width, logoImg.height);
        
        tipContainer.pivot(tipContainer.width, tipContainer.height);
        
        return tipContainer;
    }
}