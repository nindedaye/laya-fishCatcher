import { ui } from "../../ui/layaMaxUI";
import { GameView } from "../../view/GameView";

export class ScoreView extends ui.GameViewUI{
    private _totalScore:number = 0;
    private instance:ScoreView;
    public get totalScore():number{
        return this._totalScore;
    }

    public set totalScore(val:number){
        this._totalScore = val;
        this._totalScore = Math.max(0, this._totalScore);
        GameView.getInstance().Gv.getChildByName("player1").getChildByName("coinNum").text = this._totalScore;
    }
}