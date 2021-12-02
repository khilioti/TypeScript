function trip(x: string | number) {
    if (typeof x === 'number') {
        return x.toFixed(2)
    }
    return x.trim()
}

class MyResponse {
    header = 'response header'
    result = 'response result'
}

class MyError {
    header = 'error header'
    message = 'error message'
}

function hendle(res: MyResponse | MyError) {
    if (res instanceof MyResponse) {

        return res.header + res.result
    } else {
        return res.header + res.message
    }
}

// =======
type AlertType = 'success' | 'danger' | 'warning'

function setAlert (type: AlertType){
    //....
}

setAlert('success')
setAlert('danger')
// setAlert('default')




