/**
 * Created by Тимур on 16.09.2015.
 */

    function request(options){
        if (!options.dataType){
            options.dataType = 'json';
        }
        var defer = $.Deferred();
        $.ajax({
            type: options.type,
            url: options.url,
            dataType: options.dataType,
            data: options.data,
            success: function(result){
                defer.resolve(result);
            },
            error: function(err){
                defer.reject({error: "Произошла ошибка при обращении к "+options.url});
            }
        });
        return defer.promise();
    }

export default {request};