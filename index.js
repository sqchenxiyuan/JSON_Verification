module.exports = function (targetdata, mark) {
    if (typeof mark.type === 'string') mark.type = getType(mark.type);

    if (targetdata === undefined){
        if (mark.required){
            throw "Reuqired ???!"
        } else if (mark.default !== undefined){
            targetdata = (typeof mark.default === 'object') ? JSON.parse(JSON.stringify(mark.default)) : mark.default;
        } else {
            targetdata = new mark.type();
        }
    } 

    if(!checkType(targetdata,mark.type))
        throw "Error Type"

    if(!Array.isArray(mark.check))
        mark.check = [mark.check]

    if(!Array.isArray(mark.children))
        mark.children = [mark.children]

    if( (mark.type === String||mark.type === Number||mark.type === Boolean) && !check(targetdata, mark.check, mark.type.name) )
        throw "Error Data"

    if( (mark.type === Array||mark.type === Object) && !check(targetdata, mark.children, mark.type.name) )
        throw "Error Data"

    return targetdata;
    
}

function getType (type) {
    if(global){
        return global[type];
    }

    if(window){
        return window[type];
    }
}

function check(targetdata, checks, type){
    if( type === "String" || type === "Number" || type === "Boolean")
        return checks.some( check => {
            return checkfoos[type](targetdata, check);
        })
    
    if( type === "Array"){
        return targetdata.every(data => {
            return checks.some( check => {
                return checkfoos.Array(data, check);
            })
        })
    }

    if( type === "Object"){
        return checks.some( check => {
            return checkfoos.Object(targetdata, check);
        })
    }
}

var checkfoos = {
    String(targetdata, check){
        if(!check.RegExp.test(targetdata)){
            return false;
        }
        return true;
    },
    Number(targetdata, check){
        var max = check.max;
        var min = check.min;
        var values = check.values || [];

        if(values.some(value => targetdata === value)){
            return true;
        }

        if(max && targetdata > check.max){
            return false;
        }

        if(min && targetdata < check.min){
            return false;
        }

        return true;
    },
    Boolean(targetdata, check){
        var values = check.values || [];

        if(values.some(value => targetdata === value)){
            return true;
        }

        return true;
    },
    Array(targetdata, check){
        try {

            module.exports(targetdata, check);
            
        } catch (e) {
            return false;
        }

        return true;
    },
    Object(targetdata, check){
        for(keys in check){
            try {

                module.exports(targetdata[keys], check[keys]);
                
            } catch (e) {
                return false;
            }
        }

        return true;
    }
}

function checkType (target, type) {
    if( type === String|| type === Number|| type === Boolean ){
        return typeof target === type.name.toLowerCase()
    }

    if( type === Array ){
        return Array.isArray(target)
    }

    if( type === Object){
        return typeof target === 'object' && !Array.isArray(target)
    }
}