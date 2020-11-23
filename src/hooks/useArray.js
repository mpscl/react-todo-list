import React, { useState } from "react";

function useArray(initialList) {
    const [list, setList] = useState(initialList);

    return {
        list,
        addItem: newItemText => {
            setList([
                ...list,
                {
                    id: list.length + 1,
                    text: newItemText,
                    completed: false
                }
            ]);
        },
    };
}

export default useArray;