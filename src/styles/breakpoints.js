const BP = {
        xs: "0px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        xxl: "1400px"
}

const BreakPoint = {
    xs: `(max-width: ${BP.xs})`,
    sm: `(max-width: ${BP.sm})`,
    md: `(max-width: ${BP.md})`,
    lg:`(max-width: ${BP.lg})`,
    xl: `(max-width: ${BP.xl})`,
    xxl: `(max-width: ${BP.xxl})`,
}

export {BreakPoint};