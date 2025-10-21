import { responsiveFontSizes } from "@mui/material";

export const headerStyles  = {
  appBar: {
    backgroundColor: "#000",
  },
  icons: {
    color: "#a9afc3"
  },
  
  heading: {
    color: "#a9afc3",
    py: 2,        // padding-top & padding-bottom
    mt: 16,       // margin-top
    textAlign: "center",
    fontSize: '2rem', // ~40px
    fontWeight: 600,
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
      bgcolor: '#141414', 
      color: '#a9afc3', 
      boxShadow: 24,
      p: 4, 
  },

  Box: {
     title: {
        fontSize: "1.4rem", 
        fontWeight: "bold",
      },
      
      subtitle: {
        fontSize: ".9rem", 
      }
  },

  textField: {
    "& .MuiOutlinedInput-root": { 
      "& fieldset": { borderColor: "gray" },
      "&:hover fieldset": { borderColor: "#a9afc3" },
      "&.Mui-focused fieldset": { borderColor: "#a9afc3" },
    },
     "& .MuiOutlinedInput-input": {
      padding: "8px 12px", // adjust inner padding to reduce height
      height: "50px",       // input box height
      boxSizing: "border-box",
      fontSize: "0.875rem", // optional: adjust text size
    },
    "& .MuiInputLabel-root": {
      color: "gray",
      fontSize: ".9rem", 
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#a9afc3",
    },
  },
 
  closeButton: {
    position: "absolute",
    top: 8,
    right: 8,
    bgcolor: '#000',
    color: "gray",
    "&:hover": {
      color: "black",
    },
  },
};
