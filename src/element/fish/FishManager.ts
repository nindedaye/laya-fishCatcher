import Animation = laya.display.Animation;
import { FishFather } from "./FishFather";
import { FishVo } from "../../data/FishVo";
import { DataProxy } from "../../data/DataProxy";
import Point = laya.maths.Point;
export class FishManager{
    private static instance:FishManager;
    public static getInstance():FishManager{
        if(this.instance == null){
            this.instance = new FishManager;
        }
        return this.instance;
    }

    //鱼正常状态
		public FISH_NORMAL_1:string = "fish_normal_1";
		public FISH_NORMAL_2:string = "fish_normal_2";
		public FISH_NORMAL_3:string = "fish_normal_3";
		public FISH_NORMAL_4:string = "fish_normal_4";
		public FISH_NORMAL_5:string = "fish_normal_5";
		public FISH_NORMAL_6:string = "fish_normal_6";
		public FISH_NORMAL_7:string = "fish_normal_7";
		public FISH_NORMAL_8:string = "fish_normal_8";
		public FISH_NORMAL_9:string = "fish_normal_9";
		public FISH_NORMAL_10:string = "fish_normal_10";
		public FISH_NORMAL_11:string = "fish_normal_11";
		public FISH_NORMAL_12:string = "fish_normal_12";
		
		//鱼死亡状态
		public FISH_DEAD_1:string = "fish_dead_1";
		public FISH_DEAD_2:string = "fish_dead_2";
		public FISH_DEAD_3:string = "fish_dead_3";
		public FISH_DEAD_4:string = "fish_dead_4";
		public FISH_DEAD_5:string = "fish_dead_5";
		public FISH_DEAD_6:string = "fish_dead_6";
		public FISH_DEAD_7:string = "fish_dead_7";
		public FISH_DEAD_8:string = "fish_dead_8";
		public FISH_DEAD_9:string = "fish_dead_9";
		public FISH_DEAD_10:string = "fish_dead_10";
		public FISH_DEAD_11:string = "fish_dead_11";
        public FISH_DEAD_12:string = "fish_dead_12";
        
        constructor(){};

        public cacheAnimation(){
            ///id 0 小丑鱼
			Animation.createFrames("res/atlas/fish/fishimg/fish12/live.atlas",this.FISH_NORMAL_1);
			Animation.createFrames("res/atlas/fish/fishimg/fish12/dead.atlas",this.FISH_DEAD_1);
			
			///id 1 蜻蜓鱼
			Animation.createFrames("res/atlas/fish/fishimg/fish8/live.atlas",this.FISH_NORMAL_2);
			Animation.createFrames("res/atlas/fish/fishimg/fish8/dead.atlas", this.FISH_DEAD_2);
			
			///id 2 黄鱼
			Animation.createFrames("res/atlas/fish/fishimg/fish5/live.atlas",this.FISH_NORMAL_3);
			Animation.createFrames("res/atlas/fish/fishimg/fish5/dead.atlas", this.FISH_DEAD_3);
			
			///id 3 热带鱼
			Animation.createFrames("res/atlas/fish/fishimg/fish9/live.atlas",this.FISH_NORMAL_4);
			Animation.createFrames("res/atlas/fish/fishimg/fish9/dead.atlas", this.FISH_DEAD_4);
			
			///id 4 金枪鱼
			Animation.createFrames("res/atlas/fish/fishimg/fish7/live.atlas",this.FISH_NORMAL_5);
			Animation.createFrames("res/atlas/fish/fishimg/fish7/dead.atlas", this.FISH_DEAD_5);
			
			///id 5 水母
			Animation.createFrames("res/atlas/fish/fishimg/fish10/live.atlas",this.FISH_NORMAL_6);
			Animation.createFrames("res/atlas/fish/fishimg/fish10/dead.atlas", this.FISH_DEAD_6);
			
			///id 6 鳄鱼
			Animation.createFrames("res/atlas/fish/fishimg/fish2/live.atlas",this.FISH_NORMAL_7);
			Animation.createFrames("res/atlas/fish/fishimg/fish2/dead.atlas", this.FISH_DEAD_7);
			
			///id 7 大乌龟
			Animation.createFrames("res/atlas/fish/fishimg/fish11/live.atlas",this.FISH_NORMAL_8);
			Animation.createFrames("res/atlas/fish/fishimg/fish11/dead.atlas", this.FISH_DEAD_8);
			
			///id 8 海豚
			Animation.createFrames("res/atlas/fish/fishimg/fish4/live.atlas",this.FISH_NORMAL_9);
			Animation.createFrames("res/atlas/fish/fishimg/fish4/dead.atlas", this.FISH_DEAD_9);
			
			///id 9 鲸鱼
			Animation.createFrames("res/atlas/fish/fishimg/fish6/live.atlas",this.FISH_NORMAL_10);
			Animation.createFrames("res/atlas/fish/fishimg/fish6/dead.atlas", this.FISH_DEAD_10);
			
			///id 10 海胆鱼
			Animation.createFrames("res/atlas/fish/fishimg/fish3/live.atlas",this.FISH_NORMAL_11);
			Animation.createFrames("res/atlas/fish/fishimg/fish3/dead.atlas", this.FISH_DEAD_11);
			
			///id 11 灯笼鱼
			Animation.createFrames("res/atlas/fish/fishimg/fish1/live.atlas",this.FISH_NORMAL_12);
			Animation.createFrames("res/atlas/fish/fishimg/fish1/dead.atlas", this.FISH_DEAD_12);
        }

        public createFishById(id:number):FishFather{
            var fish:FishFather;
			var fishVo:FishVo = DataProxy.getInstance().getDataById(id);
			fish = laya.utils.Pool.getItemByClass("fish_info_"+(id+1)+"", FishFather);
            fishVo.fishInfo = "fish_info_"+(id+1)+"";
            fishVo.leveAn = "fish_normal_"+(id+1)+"";
            fishVo.deadAn = "fish_dead_"+(id+1)+"";

            fish.fishVo = fishVo;
            fish.id = id

            return fish;
		}
		
		public recoverfish(fish:FishFather){
			laya.utils.Pool.recover(fish.fishVo.fishInfo, fish);
		}

		/**
		 * 获取心形路径点
		 * @param	dis  大小
		 * @param	mj   点密集度
		 * @return
		 */
		public heartPathDot(dis:number=150,mj:number=10):Array<any>{
			var angle:number;//储存极角
			var p:laya.maths.Point;
			var rarr:Array<any> = [];
			var sin:number;
			var cos:number;
			var heartX:number = 0;//心形中点的坐标
			var heartY:number = 0;
			var heartSize:number = dis;//心形的大小
			 
			var A:number = Math.PI/4;
			var X:number;
			var Y:number;
			var lastX:number;
			for (var i:number = 0; i <= 360; i+=mj) {
				 //计算极角和极径
				 angle = Math.PI * i / 180;                                
				 //心形
				 X=2*Math.cos(angle)*Math.cos(A) - Math.sin(angle)*Math.sin(A);
				 Y=2*Math.cos(angle)*Math.sin(A) + Math.sin(angle)*Math.cos(A);
				 if(X>0){
					Y = -Y;
				 }
				 
				 p = new laya.maths.Point(heartX + X * heartSize, heartY + Y * heartSize);
				 rarr.push(p);
				 
				 lastX = X;
			}
			return rarr;
		}

		/**
		 * 矩形路径点
		 * @param	rows
		 * @param	cols
		 * @param	space
		 * @return
		 */
		public rectPathDot(rows:number=4, cols:number=8, space:number = 80):Array<any>{
			var p:Point;
			var arr:Array<any> = [];
			var xx:number=0;
			var yy:number=0;
			for (var i = 0; i < rows; i++) {
				for (var j = 0; j < cols; j++) {
					p = new Point(xx, yy);
					xx += space;
					arr.push(p);
				}
				xx = 0;
				yy += space;
			}
			return arr;
		}

		/**
		 * 菱形路径点
		 * @param	rows
		 * @param	cols
		 * @param	space
		 * @return
		 */
		public rhombPathDot(rows:number=7,cols:number=7,space:number=80):Array<any> {
			var val:number = Math.floor(cols / 2);//开始空的格数
			var p:Point;
			var arr:Array<any> = [];
			var xx:number=0;
			var yy:number = 0;
			
			var flag:number = 1;//1将序  2升序
			for (var i = 0; i < rows; i++) {
				if (val < 0) {
					flag = 2;
					val = 1;
				}
				for (var j = val; j < val+(cols-val*2); j++) {
					xx = j * space;
					p = new Point(xx, yy);
					arr.push(p);
				}
				if (flag == 1) {
					val--;
				}else if (flag == 2) {
					val++;
				}
				
				yy += space;
			}
			return arr;
		}

		/**
		 * 圆形路径
		 * @param	count 几环
		 * @param	space 半径间距
		 * @param	angleSpace 角度间距
		 * @return
		 */
		public circlePathDot(count:number=3,space:number=80,angleSpace:number=30):Array<any> {
			var radius:number = 0;
			var angle:number;
			var p:Point;
			var arr:Array<any> = [];
			var xx:number=0;
			var yy:number = 0;
			for (var i = 1; i <= count; i++) {
				radius = i * space;
				for (var j = 0; j < 360; j += angleSpace) {
					xx = Math.cos(j * Math.PI / 180) * radius;
					yy = Math.sin(j * Math.PI / 180) * radius;
					p = new Point(xx, yy);
					arr.push(p);
				}
			}
			return arr;
		}
}