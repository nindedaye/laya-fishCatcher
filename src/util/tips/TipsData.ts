
    /**tip 数据管理
	 * ...
	 * @author MXL
	 */
	export class TipsData
	{
        private static instance:TipsData;
        public static getInstance():TipsData{
            if(this.instance == null){
                this.instance = new TipsData();
            }
            return this.instance;
        }
		///logo tip 素材管理  0 对错号   1是表情
		public logoRightArr:Array<any> = ["fish/tip/right.png","fish/tip/face_right.png","fish/tip/face2_right.png","fish/tip/fish3_3.png"];
		public logoWrongArr:Array<any> = ["fish/tip/wrong.png","fish/tip/face_wrong.png","fish/tip/face2_wrong.png","fish/tip/fish3_2.png"];
		public logoWarnArr:Array<any> = ["fish/tip/warn.png", "fish/tip/face_warn.png", "fish/tip/face2_warn.png","fish/tip/fish3_1.png"];
		
		///bg
		public tipRightArr:Array<any> =["fish/tip/right_bg.png","fish/tip/right_bg.png","fish/tip/bg3.png","fish/tip/bg4.png"];
		public tipWrongArr:Array<any> =["fish/tip/wrong_bg.png","fish/tip/wrong_bg.png","fish/tip/bg3.png","fish/tip/bg4.png"];
		public tipWarnArr:Array<any> = ["fish/tip/warn_bg.png", "fish/tip/warn_bg.png", "fish/tip/bg3.png","fish/tip/bg4.png"];
		
		///color
		public rightColorArr:Array<any> = ["#006666","#006666","#ffffff","#ffffff"];
		public wrongColorArr:Array<any> = ["#cc0000","#cc0000","#ffffff","#ffffff"];
		public warnColorArr:Array<any> = ["#CC6600","#CC6600","#ffffff","#ffffff"];
	}