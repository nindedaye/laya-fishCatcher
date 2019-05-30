
export class HpSlider extends Laya.Sprite{
    public slider:laya.ui.ProgressBar;
    public max:number;
    public tween:laya.utils.Tween;
    constructor(){
        super();
    }
    public HpSlider(){
        this.initView();
    }

    private initView(){
        this.slider = new laya.ui.ProgressBar("../laya/assets/fish/img/progress_1.png");
        this.addChild(this.slider);
        this.slider.sizeGrid = "3,2,2,3";
        this.slider.width = 150;
        this.slider.height = 10;
        this.size(150, 10);
        this.alpha = 0;

        this.tween = new laya.utils.Tween();
    }

    /**
     * 设置数据
     * @param hp
     */
    public setData(hp:number){
        this.slider.value = (hp/this.max);
    }

    /**
     * 血条
     * @param hp
     * @param delay
     */
    public showSelf(hp:number, delay:number = 1500){
        this.setData(hp);
        this.alpha = 1;
        this.tween.clear();
        Laya.timer.once(delay, this, function(){
            this.tween.to(this, {alpha:0}, 200, null);
        })
    }
}