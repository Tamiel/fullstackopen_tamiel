export const RenderComponentIs = ({ condition, children }) => 
condition 
    ? <>{children}</> 
    : null
;