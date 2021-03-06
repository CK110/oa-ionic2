import { Component } from '@angular/core';
import {AlertController, ModalController, NavController} from 'ionic-angular';
import {ErrandApprovePage} from "../../oa/errand/approve/approve";
import {FilterPage} from "./filter/filter";
import {NativeService} from "../../providers/native-service";

@Component({
  selector: 'page-todo',
  templateUrl: 'todo.html',
})
export class TodoPage {

  brokenNetwork: boolean = false;

  type: string = "myApprove"; // 审批类型: 待我审批/我申请的

  todolist:any[];



  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              public alertController:AlertController,
              public nativeService:NativeService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TodoPage');
  }

  ionViewWillEnter(){
    if (!this.nativeService.isConnecting()) {
      this.brokenNetwork = true;
    }else {
      this.brokenNetwork = false;

      this.alertController.create({
        title: '每次进入TodoTab',
        message: '请求数据',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');

              this.todolist =[
                {processName:'续订劳动合同',starterName:'陈武军',startTimeString:'2017-07-03'},
                {processName:'续订劳动合同',starterName:'陈武军',startTimeString:'2017-07-03'},
                {processName:'续订劳动合同',starterName:'陈武军',startTimeString:'2017-07-03'},
                {processName:'续订劳动合同',starterName:'陈武军',startTimeString:'2017-07-03'},
                {processName:'续订劳动合同',starterName:'陈武军',startTimeString:'2017-07-03'},
                {processName:'续订劳动合同',starterName:'陈武军',startTimeString:'2017-07-03'},
                {processName:'续订劳动合同',starterName:'陈武军',startTimeString:'2017-07-03'},
                {processName:'续订劳动合同',starterName:'陈武军',startTimeString:'2017-07-03'},
                {processName:'续订劳动合同',starterName:'陈武军',startTimeString:'2017-07-03'},
                {processName:'续订劳动合同',starterName:'陈武军',startTimeString:'2017-07-03'},
                {processName:'续订劳动合同',starterName:'陈武军',startTimeString:'2017-07-03'},
                {processName:'续订劳动合同',starterName:'陈武军',startTimeString:'2017-07-03'}
              ];
            }
          }
        ]
      }).present();
    }


  }

  /**
  * 跳转到流程列表页
  */
 processList(){
  //  this.navCtrl.push(ProcessListPage);
 }

 /**
  * 跳转到流程审批详细页
  * @param todo
  */
 openNavDetailsPage(page) {
   if(page ==="errand"){
     this.navCtrl.push(ErrandApprovePage);
   }else{
    //  this.navCtrl.push(TodoDetailsPage, { todo: todo });

     // this.navCtrl.parent.push(TodoDetailsPage, { todo: todo })
   }

 }

 /**
  * 下拉刷新
  * @param refresher
  */
 doRefresh(refresher){
   console.log('代办任务下拉刷新', refresher);
  //  this.todoService.getTodoList().subscribe( list=>{
  //    console.log(list);
  //    this.todolist=list;
  //    refresher.complete();
  //  })

  setTimeout(()=>{
    refresher.complete();
  },1000)
 }


  /**
   * 类似京东过滤页面效果
   */
  openFilter(){
    this.modalCtrl.create(FilterPage, {}, {
      enterAnimation: 'modal-from-right-enter',
      leaveAnimation: 'modal-from-right-leave'
    }).present();
  }

}
