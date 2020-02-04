import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
  listValues: any[];
}

function CurrenciesDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open, listValues } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value: string) => {
    onClose(value);
  };
  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title">Choose Currency</DialogTitle>
      <List>
        {listValues.map(value => (
          <ListItem
            button
            onClick={() => handleListItemClick(value)}
            key={value}
          >
            <ListItemText primary={value} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

interface IAddInput {
  currenciesList: any[];
  onSelectCurrency: (currency: string) => void;
}
export default function AddInputDialog(props: IAddInput) {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
    props.onSelectCurrency(value);
  };

  return (
    <div>
      <Fab color="primary" aria-label="add" onClick={handleClickOpen}>
        <AddIcon />
      </Fab>
      <CurrenciesDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
        listValues={props.currenciesList}
      />
    </div>
  );
}
