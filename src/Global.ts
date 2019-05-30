export class Global 
{
    private static instance:Global;
    public static getInstance():Global {
        if(this.instance == null){
            this.instance = new Global();
        }
        return this.instance;
    }
    
    public totalWidth:number = 1280;//总宽度
    public totalHeight:number = 700;//总长度
    public bottomSpace:number = 50;//距离底部空隙
    
    public bulletMoveSpeed:number = 15;//子弹移动速度
    public ISPAUSE:Boolean = false;//是否暂停
    public ISOVER:Boolean = false;//是否结束
    
    //子弹修正值
    public bulletOneValue:number = 40;
    public bulletOtherValue:number = 160;
    
    public totalFishNum:number = 30;//屏幕中最多fish
    
    public totalSocre:number = 1000;//初始总分数
    
    private _lvlnum:number = 1;//当前的关卡
    public get lvlnum():number{
        return this._lvlnum;
    }
    public set lvlnum(val:number){
        this._lvlnum = val;
        this._lvlnum = Math.min(this._lvlnum, 40);
        
        this.lvlAddValue = 1 + this._lvlnum * 0.05;
    }
    
    public lvlAddValue:number = 0;//关卡增加速度系数
    public getPowerNum:number = 0;//获取到的能量
    
    public shootInterTime:number = 1;//子弹发射间隔 
    public shootPower:number = 1;//子弹威力    
}