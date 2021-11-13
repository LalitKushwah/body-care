import React, {forwardRef} from 'react';
import RBSheet from "react-native-raw-bottom-sheet";

const BottomSheet = forwardRef(({children, height}, ref) => {
    return (
        <RBSheet ref={ref} height={height} customStyles={{container: {
            borderTopRightRadius: 25,
            borderTopLeftRadius: 25
        }}}>
            {children}
        </RBSheet>
    )
});

export default BottomSheet;