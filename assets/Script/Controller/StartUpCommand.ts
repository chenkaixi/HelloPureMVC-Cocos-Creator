import { ImageUrlListProxy } from "../Model/ImageUrlListProxy";
import ImageMediator from "../View/ImageMediator";
import ControlBtnsMediator from "../View/ControlBtnsMediator";
import ApplicationFacade from "../ApplicationFacade";

export class StartUpCommand extends puremvc.SimpleCommand implements puremvc.ICommand {
    public constructor() {
        super();
    }

    public execute(notification: puremvc.INotification): void {
        console.log('接受通知，调用execute');
        let data: any = notification.getBody();
        
        //通过模型名注册代理(proxy)
        this.facade.registerProxy(new ImageUrlListProxy(ImageUrlListProxy.NAME));

        //注册中介器  
        this.facade.registerMediator(new ImageMediator(
            ImageMediator.NAME,
            {
                label_name: data.label_name,
                imageLoader:data.imageLoader
            }
        ));

        this.facade.registerMediator(new ControlBtnsMediator(
            ControlBtnsMediator.NAME,
            {
                btn_next: data.btn_next,
                btn_prev: data.btn_prev
            }
        ));
        // //通知已经初始化完毕  
        console.log('发送APP_STARTUP_OVER通知');
        this.sendNotification(ApplicationFacade.APP_STARTUP_OVER, data);
        
    }
}