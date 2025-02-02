

function ListsComponent () {
    return (
        <>
            <ol>
                <li>Der erste Punkt</li>
                <li>
                    Der zweite Punkt
                    <ol>
                        <li>1</li>
                        <li>2</li>
                    </ol>
                </li>
                <li>Der dritte Punkt</li>
            </ol>
            <ul>
                <li>Element einz</li>
                <li>
                    Element zwei
                    <ul>
                        <li>1</li>
                        <li>2</li>
                    </ul>
                </li>
                <li>Element drei</li>
            </ul>
        </>
    );
};

export default ListsComponent