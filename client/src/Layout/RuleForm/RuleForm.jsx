import React from 'react';

import {Link} from 'react-router-dom';

const RuleForm = ({rule}) => {
    return (
        <div className="panel panel-primary">
            <div className="panel-heading">
                <h3 className="panel-title">New rule</h3>
            </div>
            <div className="panel-body">
                <form>
                    <div className="form-group">
                        <label htmlFor="rule-title">Title</label>
                        <input type="text" className="form-control" id="rule-title" placeholder="Title" value={rule.title} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="rule-desc">Description</label>
                        <textarea className="form-control" id="rule-desc" placeholder="Description" value={rule.description} />
                    </div>
                    <button type="submit" className="btn btn-primary pull-right">Submit</button>
                </form>
            </div>            
        </div>
    )
}

RuleForm.defaultProps = {
    rule: {},
};

export default RuleForm
