import React from "react";
import { Button} from '@chakra-ui/react';
import type {ButtonOptions} from '@chakra-ui/react';

export type CustomButtonOptions = ButtonOptions;

const AwesomeButton = ({isLoading}: CustomButtonOptions) => (
   <>
   {isLoading && (<Button>Button</Button>)}
   </>
);

export default AwesomeButton;