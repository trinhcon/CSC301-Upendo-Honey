import React from 'react';
import "./bullet-points.css";

class BulletPoints extends React.Component {

    createBullets(points, style) {
        let items = points.map((point) => (
            <li className={style}>{point}</li>
        ));
        return items;
    }

    render () {
        return (
            <div className={"listContainer " + this.props.style}>
                {this.props.includeHeader && <span>this.props.header</span>}
                <ul className="bulletList">
                    {this.createBullets(this.props.points, this.props.bulletStyle)}
                </ul>
            </div>
        )
    }
}

export default BulletPoints;