export const headerStyles  = {
  appBar: {
    backgroundColor: "#000",
  },
  title: {
    flexGrow: 1,
    color: "gray",
    fontWeight: "bold",
  },
  iconButton: {
    color: "inherit",
  },
  
  modalBox: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      border: '2px solid #000', 
      boxShadow: 24,
      p: 4,
  },
  
  closeButton: {
    position: "absolute",
    top: 8,
    right: 8,
    color: "gray",
    "&:hover": {
      color: "black",
    },
  },
};
