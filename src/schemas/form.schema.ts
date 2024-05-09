import { TSchema } from "@bolttech/form-engine";

export const schema: TSchema = {
  components: [
    {
      name: "",
      component: "",
      children: [
        {
          name: "row",
          component: "box",
          props: {
            className: 'flex flex-row gap-s justify-between'
          },
          children: [
            {
              name: "column_one",
              component: "column",
              props: {
                size: {
                  lg: "50%",
                  md: "50%",
                  sm: "100%",
                  xs: "100%",
                },
              },
              children: [
                {
                  name: "input_one",
                  component: "input",
                  props: {
                    id: "input_one",
                    name: "input_one",
                    label: "Input One",
                    variant: 'border'
                  },
                  validations: {
                    ON_FIELD_CHANGE: {
                      required: true,
                      email: true,
                    },
                  },
                  errorMessages: {
                    required: "Please enter an input",
                    email: "Invalid Email Address",
                  },
                },
              ],
            },
            {
              name: "column_two",
              component: "column",
              props: {
                size: {
                  lg: "50%",
                  md: "50%",
                  sm: "100%",
                  xs: "100%",
                },
              },
              children: [
                {
                  name: "input_two",
                  component: "input",
                  props: {
                    id: "input_two",
                    name: "input_two",
                    label: "Input Two",
                    variant: 'border'
                  },
                  formatters: {
                    ON_FIELD_CHANGE: {
                      upperCase: true,
                    },
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
