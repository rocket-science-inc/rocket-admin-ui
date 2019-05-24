import * as Rules from "./validation.rules";
import * as Messages from "./validation.messages";

export class ValidationService {

    public static validateFunction(expression:Function, value:any, param:any):Promise<boolean> {
        return Promise.resolve(expression(value, param)).then(isvalid => {
            if (isvalid) return Promise.resolve(isvalid);
            else return Promise.reject();
        });
    };

    public static validateRegexp(expression:RegExp, value:any):Promise<boolean> {
        if (value) {
            return Promise.resolve(expression.test(value)).then(isvalid => {
                if (isvalid) return Promise.resolve(isvalid);
                else return Promise.reject(isvalid);
            })
        };
        return Promise.resolve(true);
    };

    public static excludeValidationRule(rule:string, validation:any):any {
        return Object.keys(validation)
            .filter(key => key != rule)
            .reduce((res, key) => {
                return {...res, [key]: validation[key]}
            }, {})
    };

    public static validateRule(value:any, key:string, rest:any = {}):Promise<any> {
        return ((expression, key:string, rest:any) => {
            if (expression.constructor == Function) {
                return this.validateFunction(expression, value, rest[key])
                    .catch(() => Promise.reject({ [key]: Messages[key].error }))
            };
            if (expression.constructor === RegExp) {
                return this.validateRegexp(expression, value)
            };
            return Promise.resolve(true);
        })(Rules[key], key, rest).then(() => {
            return this.excludeValidationRule(key, rest)
        }).then(validation => {
            if (Object.keys(validation).length) {
                return this.validateRule(value, Object.keys(validation)[0], validation)
            } else return true;
        }).catch(error => {
            return Promise.reject(error);
        });;
    };

    public static validate(value, validation):Promise<any> {
        if (Object.keys(validation).length) {
            return Promise.resolve(validation).then(validation => {
                return this.validateRule(value, Object.keys(validation)[0], validation)
            })
        };
        return Promise.resolve(true);
    };

};



// (function() {
//     angular
//       .module('validation.directive')
//       .directive('validator', Validator);
  
//     function Validator($injector) {
//       var $validationProvider = $injector.get('$validation');
//       var $q = $injector.get('$q');
//       var $timeout = $injector.get('$timeout');
//       var $compile = $injector.get('$compile');
//       var $parse = $injector.get('$parse');
//       var groups = {};
  
//       /**
//        * Do this function if validation valid
//        * @param element
//        * @param validMessage
//        * @param validation
//        * @param callback
//        * @param ctrl
//        * @returns {}
//        */
//       var validFunc = function(element, validMessage, validation, scope, ctrl, attrs, param) {
//         var messageToShow = validMessage || $validationProvider.getDefaultMsg(validation).success;
//         var validCallback = $parse(attrs.validCallback);
//         var messageId = attrs.messageId;
//         var validationGroup = attrs.validationGroup;
//         var messageElem;
  
//         if (messageId || validationGroup) messageElem = angular.element(document.querySelector('#' + (messageId || validationGroup)));
//         else messageElem = $validationProvider.getMsgElement(element);
  
//         if (element.attr('no-validation-message')) {
//           messageElem.css('display', 'none');
//         } else if ($validationProvider.showSuccessMessage && messageToShow) {
//           messageToShow = angular.isFunction(messageToShow) ? messageToShow(element, attrs, param) : messageToShow;
  
//           messageElem.html('').append($compile($validationProvider.getSuccessHTML(messageToShow, element, attrs))(scope));
//           messageElem.css('display', '');
//         } else {
//           messageElem.css('display', 'none');
//         }
  
//         ctrl.$setValidity(ctrl.$name, true);
//         validCallback(scope, {
//           message: messageToShow
//         });
//         if ($validationProvider.validCallback) $validationProvider.validCallback(element);
  
//         return true;
//       };
  
  
//       /**
//        * Do this function if validation invalid
//        * @param element
//        * @param validMessage
//        * @param validation
//        * @param callback
//        * @param ctrl
//        * @returns {}
//        */
//       var invalidFunc = function(element, validMessage, validation, scope, ctrl, attrs, param) {
//         var messageToShow = validMessage || $validationProvider.getDefaultMsg(validation).error;
//         var invalidCallback = $parse(attrs.invalidCallback);
//         var messageId = attrs.messageId;
//         var validationGroup = attrs.validationGroup;
//         var messageElem;
  
//         if (messageId || validationGroup) messageElem = angular.element(document.querySelector('#' + (messageId || validationGroup)));
//         else messageElem = $validationProvider.getMsgElement(element);
  
//         if (element.attr('no-validation-message')) {
//           messageElem.css('display', 'none');
//         } else if ($validationProvider.showErrorMessage && messageToShow) {
//           messageToShow = angular.isFunction(messageToShow) ? messageToShow(element, attrs, param) : messageToShow;
  
//           messageElem.html('').append($compile($validationProvider.getErrorHTML(messageToShow, element, attrs))(scope));
//           messageElem.css('display', '');
//         } else {
//           messageElem.css('display', 'none');
//         }
  
//         ctrl.$setValidity(ctrl.$name, false);
//         invalidCallback(scope, {
//           message: messageToShow
//         });
//         if ($validationProvider.invalidCallback) $validationProvider.invalidCallback(element);
  
//         return false;
//       };
  
//       /**
//        * Verify whether there is one of the elements inside the group valid.
//        * If so, it returns true, otherwise, it returns false
//        *
//        * @param validationGroup
//        * @return {boolean}
//        */
//       var checkValidationGroup = function(validationGroup) {
//         var group = groups[validationGroup];
  
//         return Object.keys(group).some(function(key) {
//           return group[key];
//         });
//       };
  
//       /**
//        * Set validity to all elements inside the given group
//        *
//        * @param scope
//        * @param groupName
//        * @param validity
//        */
//       function setValidationGroup(scope, validationGroup, validity) {
//         var validationGroupElems = document.querySelectorAll('*[validation-group=' + validationGroup + ']');
  
//         // Loop through all elements inside the group
//         for (var i = 0, len = validationGroupElems.length; i < len; i++) {
//           var elem = validationGroupElems[i];
//           var formName = elem.form.name;
//           var elemName = elem.name;
//           scope[formName][elemName].$setValidity(elemName, validity);
//         }
//       }
  
//       /**
//        * collect elements for focus
//        * @type {Object}
//        ***private variable
//        */
//       var focusElements = {};
  
//       /**
//        * Get Validation Result Object
//        * @param data
//        * @returns {
//        *    result: Boolean, // is success or error
//        *    message: String  // tips
//        * }
//        */
//       function getResultObj(data) {
//         var res = {};
//         if (data && data.length > 0) {
//           res = data[0];
//           if (!angular.isObject(res)) {
//             res = {
//               result: res,
//               message: ''
//             };
//           }
//         } else {
//           res = {
//             result: false,
//             message: ''
//           };
//         }
//         return res;
//       }
  
//       /**
//        * Check Validation with Function or RegExp
//        * @param scope
//        * @param element
//        * @param attrs
//        * @param ctrl
//        * @param validation
//        * @param value
//        * @returns {}
//        */
//       
  
//       /**
//        * generate unique guid
//        */
//       var s4 = function() {
//         return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
//       };
//       var guid = function() {
//         return (s4() + s4() + s4() + s4());
//       };
  
  
//       return {
//         restrict: 'A',
//         require: 'ngModel',
//         link: function(scope, element, attrs, ctrl) {
//           /**
//            * All attributes
//            */
//           var useViewValue = attrs.useViewValue !== 'false';
//           var validator = attrs.validator;
//           var messageId = attrs.messageId;
//           var validationGroup = attrs.validationGroup;
//           var validMethod = attrs.validMethod;
//           var ngModel = attrs.ngModel;
  
//           /**
//            * watch
//            * @type {watch}
//            *
//            * Use to collect scope.$watch method
//            *
//            * use watch() to destroy the $watch method
//            */
//           var watch = function() {};
  
//           /**
//            * validator
//            * @type {Array}
//            *
//            * Convert user input String to Array
//            */
//           var validation = validator.split(',');
  
//           /**
//            * guid use
//            */
//           var uid = ctrl.validationId = guid();
  
//           /**
//            * to have a value to rollback to
//            */
//           var originalViewValue = null;
  
//           /**
//            * Set initial validity to undefined if no boolean value is transmitted
//            */
//           var initialValidity = void 0;
//           if (typeof attrs.initialValidity === 'boolean') {
//             initialValidity = attrs.initialValidity;
//           }
  
//           /**
//            * Observe validator changes in order to allow dynamically change it
//            */
//           attrs.$observe('validator', function(value) {
//             validation = value.split(',');
//           });
  
//           /**
//            * Set up groups object in order to keep track validation of elements
//            */
//           if (validationGroup) {
//             if (!groups[validationGroup]) groups[validationGroup] = {};
//             groups[validationGroup][ctrl.$name] = false;
//           }
  
//           /**
//            * Default Valid/Invalid Message
//            */
//           if (!(messageId || validationGroup)) $validationProvider.addMsgElement(element);
  
//           /**
//            * Set custom initial validity
//            * Usage: <input initial-validity="true" ... >
//            */
//           ctrl.$setValidity(ctrl.$name, initialValidity);
  
//           /**
//            * Reset the validation for specific form
//            */
//           scope.$on(ctrl.$name + 'reset-' + uid, function() {
//             /**
//              * clear scope.$watch here
//              * when reset status
//              * clear the $watch method to prevent
//              * $watch again while reset the form
//              */
//             watch();
  
//             $timeout(function() {
//               ctrl.$setViewValue(originalViewValue);
//               ctrl.$setPristine();
//               ctrl.$setValidity(ctrl.$name, undefined);
//               ctrl.$render();
//               if (messageId || validationGroup) angular.element(document.querySelector('#' + (messageId || validationGroup))).html('');
//               else $validationProvider.getMsgElement(element).html('');
  
//               if ($validationProvider.resetCallback) $validationProvider.resetCallback(element);
//             });
//           });
  
//           /**
//            * Check validator
//            */
//           validMethod = (angular.isUndefined(validMethod)) ? $validationProvider.getValidMethod() : validMethod;
  
//           /**
//            * Click submit form, check the validity when submit
//            */
//           scope.$on(ctrl.$name + 'submit-' + uid, function(event, index) {
//             var value = useViewValue ? ctrl.$viewValue : ctrl.$modelValue;
//             var isValid = false;
  
//             isValid = checkValidation(scope, element, attrs, ctrl, validation, value);
  
//             if (validMethod === 'submit') {
//               // clear previous scope.$watch
//               watch();
//               watch = scope.$watch(function() {
//                 return scope.$eval(ngModel);
//               }, function(value, oldValue) {
//                 // don't watch when init
//                 if (value === oldValue) {
//                   return;
//                 }
  
//                 // scope.$watch will translate '' to undefined
//                 // undefined/null will pass the required submit /^.+/
//                 // cause some error in this validation
//                 if (value === undefined || value === null) {
//                   value = '';
//                 }
  
//                 isValid = checkValidation(scope, element, attrs, ctrl, validation, value);
//               });
//             }
  
//             var setFocus = function(isValid) {
//               if (isValid) {
//                 delete focusElements[index];
//               } else {
//                 focusElements[index] = element[0];
  
//                 $timeout(function() {
//                   focusElements[Math.min.apply(null, Object.keys(focusElements))].focus();
//                 }, 0);
//               }
//             };
  
//             if (isValid instanceof Object) isValid.then(setFocus);
//             else setFocus(isValid);
//           });
  
//           /**
//            * Validate blur method
//            */
//           if (validMethod === 'blur') {
//             element.bind('blur', function() {
//               var value = scope.$eval(ngModel);
  
//               if (scope.$root.$$phase !== '$apply') {
//                 scope.$apply(function() {
//                   checkValidation(scope, element, attrs, ctrl, validation, value);
//                 });
//               } else {
//                 checkValidation(scope, element, attrs, ctrl, validation, value);
//               }
//             });
  
//             return;
//           }
  
//           /**
//            * Validate submit & submit-only method
//            */
//           if (validMethod === 'submit' || validMethod === 'submit-only') {
//             return;
//           }
  
//           /**
//            * Validate watch method
//            * This is the default method
//            */
//           scope.$watch(function() {
//             return scope.$eval(ngModel);
//           }, function(value) {
//             /**
//              * dirty, pristine, viewValue control here
//              */
//             if (ctrl.$pristine && ctrl.$viewValue) {
//               // has value when initial
//               originalViewValue = ctrl.$viewValue || '';
//               ctrl.$setViewValue(ctrl.$viewValue);
//             } else if (ctrl.$pristine) {
//               // Don't validate form when the input is clean(pristine)
//               if (messageId || validationGroup) angular.element(document.querySelector('#' + (messageId || validationGroup))).html('');
//               else $validationProvider.getMsgElement(element).html('');
//               return;
//             }
//             checkValidation(scope, element, attrs, ctrl, validation, value);
//           });
  
//           $timeout(function() {
//             /**
//              * Don't showup the validation Message
//              */
//             attrs.$observe('noValidationMessage', function(value) {
//               var el;
//               if (messageId || validationGroup) el = angular.element(document.querySelector('#' + (messageId || validationGroup)));
//               else el = $validationProvider.getMsgElement(element);
//               if (value === 'true' || value === true) el.css('display', 'none');
//               else if (value === 'false' || value === false) el.css('display', 'block');
//             });
//           });
//         }
//       };
//     }
//     Validator.$inject = ['$injector'];
//   }).call(this);