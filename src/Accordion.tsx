import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import React from 'react';

export default function SimpleAccordian() {
  return (
    <div>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>Accordian 1</AccordionSummary>
        <AccordionDetails>
          Hey stuff about number 1
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>Accordian 2</AccordionSummary>
        <AccordionDetails>
          Hey stuff about number 2
        </AccordionDetails>
      </Accordion>
    </div>
  )
}