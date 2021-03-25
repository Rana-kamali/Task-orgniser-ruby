import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export const Survey = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(event.target.value);
  };
  return (
    <FormControl component="fieldset">
      <FormLabel>1. I am a</FormLabel>
      <RadioGroup
        aria-label="gender"
        name="gender1"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
      <FormLabel>2. I am in Year...</FormLabel>
      <RadioGroup
        aria-label="gender"
        name="year"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="year 4" control={<Radio />} label="Year 4" />
        <FormControlLabel value="year 5" control={<Radio />} label="Year 5" />
        <FormControlLabel value="year 6" control={<Radio />} label="Year 6" />
        <FormControlLabel value="year 7" control={<Radio />} label="Year 7" />
        <FormControlLabel value="year 8" control={<Radio />} label="Year 8" />
        <FormControlLabel value="year 9" control={<Radio />} label="Year 9" />
        <FormControlLabel
          value="Staff / Admin"
          control={<Radio />}
          label="Staff / Admin"
        />
        <div className={classes.root}>
          <Button variant="contained" color="primary" href="#contained-buttons">
            Link
          </Button>
        </div>
      </RadioGroup>
    </FormControl>
  );
};
