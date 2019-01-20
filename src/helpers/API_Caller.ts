import * as $ from 'jquery';

export default function Get(URL: string) {
    return new Promise<any>((resolve, reject) => {
        $.ajax({
            dataType: 'json',
            error: (xhr, status, err) => {
                reject(err);
            },
            success: (data: any) => {
                resolve(data);
            },
            type: 'GET',
            url: URL
        })
    })
}

