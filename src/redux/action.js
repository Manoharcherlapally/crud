
export const addContact = (num) => {
    return {
        type: 'ADD_CONTACT',
        payload: num
    }
}

export const updateContact = (num) => {
    return {
        type: 'UPDATE_CONTACT',
        payload: num
    }
}

export const deleteCont = (num) => {
    console.log(num)
    return {
        type: 'DELECT_CONTACT',
        payload: num
    }
}
