export const required = (value:any, param:boolean):boolean => {
    return !param ? true : !!value;
};

export const minlength = (value, param:number):boolean => {
    return value && value.length >= param;
};

export const maxlength = (value, param:number):boolean => {
    return !value || value.length <= param;
};

export const url = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;

export const email = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

export const number = /^\d+$/;