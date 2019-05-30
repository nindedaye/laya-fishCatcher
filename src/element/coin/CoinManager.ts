import Animation = laya.display.Animation;
import Pool = laya.utils.Pool;
import SoundManager = laya.media.SoundManager;
import { Coin } from "./Coin"
import { FishFather } from "../fish/FishFather";
import { Global } from "../../Global";
export class CoinManager{
    private static instance:CoinManager = new CoinManager();
    public static getInstance():CoinManager{
        return this.instance;
    }
    public COIN:string = "coin";//金币
    public SILVER:string = "silver";//银币

    constructor(){};

    public cacheAnimation(){
        Animation.createFrames("res/atlas/fish/money/coin.atlas", this.COIN);
        Animation.createFrames("res/atlas/fish/money/silver.atlas", this.SILVER);
    }

    /**
     * 创建钱币
     * @param type
     */
    public createCoin(type:string):Coin{
        var coin:Coin = Pool.getItemByClass(type, Coin);
        coin.type = type;
        return coin;
    }

    /**
     * 添加金币
     * @param fish 
     * @param con 
     */
    public createMoreCoin(fish:FishFather, con:Laya.Sprite){
        var score:number = fish.isInOrder?fish.fishVo.score*2:fish.fishVo.score;
        var coinType:string;
        var coinNum:number = 0;
        if(score>=10){
            coinType = this.COIN;
            coinNum = Math.floor(score/10);
        }else{
            coinType = this.SILVER;
            coinNum =score;
        }
        this.addCoin(coinNum, coinType, fish.x, fish.y, con);
    }

    /**
     * 添加金币
     * @param coinNum 
     * @param coinType 
     * @param sx 
     * @param sy 
     * @param con 
     */
    public addCoin(coinNum:number, coinType:string, sx:number, sy:number, con:Laya.Sprite){
        var coin:Coin;
        var yy:number = 0;
        var xx:number = 0;
        var delayTime:number = 200;

        if(coinNum > 5){
            SoundManager.playSound("res/sound/coin_more.mp3");
        }else{
            SoundManager.playSound("res/sound/coin2.mp3");
        }

        for(var i=0;i < coinNum; i++){
            coin = this.createCoin(coinType);
            coin.once(Coin.getInstance().MOVE_END, this, this.moveEnd);
            coin.pos(sx + coin.width*xx, sy+yy*coin.height);
            con.addChild(coin);

            xx++;
            if(xx % 6==0){
                yy++;
                xx = 0;
            }

            delayTime += 20;
            coin.moveToPos(100, Global.getInstance().totalHeight+50, delayTime);
        }
    }

    /**
     * 
     * @param coin 移动完成
     */
    private moveEnd(coin:Coin){
        coin.removeSelf();
        this.recoverCoin(coin);
    }

    /**
     * 回收钱币
     * @param coin 
     */
    public recoverCoin(coin:Coin){
        Pool.recover(coin.type, coin);
    }
}