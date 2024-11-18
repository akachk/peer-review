type PreventForwardCustomProps = (props: string[]) => {
  shouldForwardProp: (prop: string) => boolean;
};

export const preventForwardCustomProps: PreventForwardCustomProps = (
  props = [],
) => ({
  shouldForwardProp: (prop) => !props.includes(prop),
});
