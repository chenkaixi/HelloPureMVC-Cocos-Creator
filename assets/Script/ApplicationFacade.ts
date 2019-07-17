import { StartUpCommand } from "./Controller/StartUpCommand";
import GetUrlListCommand from "./Controller/GetUrlListCommand";
/**
 * pureMVC 框架Demo
 * facade 全局控制类
 */
export default class ApplicationFacade extends puremvc.Facade implements puremvc.IFacade {

    public static APP_STARTUP: string = "app_startup";
    public static APP_STARTUP_OVER: string = "app_startup_over";


    public static instance: ApplicationFacade;
    public static getInstance(): ApplicationFacade {
        if (this.instance == null) {
            this.instance = new ApplicationFacade();
        }
        return this.instance;
    }

    /**
     * 初始化Controller
     * Controller【控制器】注册Command【命令】
     */
    public initializeController() {
        super.initializeController();
        //注册命令
        this.registerCommand(ApplicationFacade.APP_STARTUP, StartUpCommand);
        this.registerCommand(ApplicationFacade.APP_STARTUP_OVER,GetUrlListCommand);
        console.log('注册APP_START&APP_STARTUP_OVER指令');
    }

    public startup(app: Object): void {
        console.log('分发通知');
        console.log('当前场景' + cc.director.getScene().name);
        if (cc.director.getScene().name == "HelloPureMVC") {
            this.sendNotification(ApplicationFacade.APP_STARTUP, app);//发送启动通知
        }

    }
}
