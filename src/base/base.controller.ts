'use strict';

interface IPagination {
  page: number;
  to: number;
  from: number;
  total: number;
  totalPage: number;
  pageSize: number;
}

export default class BaseController {

  protected $filter: any;
  protected isSubmit: boolean;
  protected isLoadingPage: boolean;
  protected pagination: IPagination;
  protected messageErrors: any;
  protected $uibModal: ng.ui.bootstrap.IModalService;

  /**
   * @name constructor
   * @description init property for class
   */
  constructor() {
    this.isSubmit = false;
    this.isLoadingPage = false;
    this.pagination = {
      page: 1,
      total: 0,
      to: 0,
      from: 0,
      totalPage: 0,
      pageSize: 10
    };
  }

  /**
   * @name translate
   * @description This function translate text by key
   * @param {string} key translate key
   * @return {string} translate text
   */
  protected translate(key: string): string {
    if (this.$filter) {
      return this.$filter('translate')(key);
    }
  }

  /**
   * @name getPagination
   * @description This function get response pagination
   * @param  {any}    data response data
   * @return {Object}      pagination object
   */
  protected getPagination(data: any): Object {
    return {
      page: data.current_page,
      to: data.to,
      from: data.from,
      total: data.total,
      pageSize: data.per_page,
      totalPage: data.last_page
    };
  }

  /**
   * @name setPagination
   * @description This function set pagination for list item
   * @param {any} data response data
   */
  protected setPagination(data: any): void {
    this.pagination.page = data.current_page;
    this.pagination.to = data.to;
    this.pagination.from = data.from;
    this.pagination.total = data.total;
    this.pagination.totalPage = data.last_page;
    this.pagination.pageSize = data.per_page;
  }

  /**
   * @name clearMessageError
   * @description This function clear message error in form
   */
  protected clearMessageError(): void {
    this.messageErrors = null;
  }

  /**
   * @name openModal
   * @description This function open ui bootstrap modal with custom config
   * @param {any} config config of modal
   */
  protected openModal(config: any): void {
    if (this.$uibModal) {
      this.$uibModal.open({
        animation: true,
        templateUrl: config.templateUrl,
        controller: config.controller,
        controllerAs: config.controller.replace('Controller', 'Ctrl'),
        backdrop: 'static',
        keyboard: false,
        resolve: {
          modalData: () => {
            return config.data ? config.data : null;
          }
        }
      });
    }
  }
}
