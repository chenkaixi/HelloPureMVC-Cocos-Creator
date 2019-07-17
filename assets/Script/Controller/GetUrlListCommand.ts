import { ImageUrlListProxy } from "../Model/ImageUrlListProxy";

export default class GetUrlListCommand extends puremvc.SimpleCommand implements puremvc.ICommand {
    constructor() {
        super();
    }

    public execute(notification: puremvc.INotification) {
        console.log('接受通知，调用execute，检索代理ImageUrlListProxy.NAME');
        //得到图片链接
        (this.facade.retrieveProxy(ImageUrlListProxy.NAME) as ImageUrlListProxy).loadUrlList();
    }
}
