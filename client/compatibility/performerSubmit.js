Performers = new Mongo.Collection("performers");
Performers.attachSchema(new SimpleSchema({
  fullName: {
    type: String,
    label: "Full Name",
    autoform:{
    	placeholder: "John Doe"
    }
  },
  Grade: {
    type: Number,
    label: "Grade",
    autoform:{
    	placeholder: "Ex: 9"
    }
  },
 Email: {
    type: String,
    label: "Email",
    autoform: {
      afFieldInput: {
        type: "email",
        placeholder: "example@email.com"
      }
    }
  },
  phoneNumber: {
    type: Number,
    label: "Phone Number",
    autoform:{
    	placeholder: "123-456-7890",
    	type:"tel"
    }
  },
   Consent: {
      type: Boolean,
      label: "Do you agree release your photos and media to us?",
      autoform: {
         type: "boolean-select",
         trueLabel: "Yes, I agree",
         falseLabel: "No, I do NOT agree",
         firstOption: "(Please Choose a Response)"
      }
   },
  category: {
    type: String,
    label: "Category",
    allowedValues: ['dance', 'drama', 'music', 'visuals', 'other'],
    autoform: {
      options: [
        {label: "Dance", value: "dance"},
        {label: "Drama", value: "drama"},
        {label: "Music", value: "music"},
        {label: "Visuals", value: "visuals"},
        {label: "Other", value: "other"}
      ]
    }
  },
  submitLink:{
    type: String,
    label: "Submit Example of your performance/work!",
    autoform:{
      placeholder: "Ex: Link to your performance, portfolio or other link"
    }
  },
  Comments:{
    type: String,
    label: "Do you have any comments?",
    optional:true,
    autoform:{
      placeholder: "Ex: Link to your performance, portfolio or other link",
      type:"textarea"
    }
  },

}));

