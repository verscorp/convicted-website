import {useEffect, useRef, useState} from "react";

function useSvg(name, options = {}) {
    // console.log(name)
    const ImportedIconRef = useRef();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    const { onCompleted, onError } = options;
    useEffect(() => {
        setLoading(true);
        const importIcon = async () => {
            try {
                const { ReactComponent } = await import(`../static/icons/${name}.svg`)
                console.log(ReactComponent)
                ImportedIconRef.current = ReactComponent
                if (onCompleted) {
                    onCompleted(name, ImportedIconRef.current);
                }
            } catch (err) {
                if (onError) {
                    onError(err);
                }
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        importIcon();
    }, [name, onCompleted, onError]);

    return { error, loading, SvgIcon: ImportedIconRef.current };
}

export default useSvg