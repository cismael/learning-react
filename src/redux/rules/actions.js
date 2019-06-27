export const RULES_LOADED = 'RULES_LOADED';
export const DO_LIKE = 'DO_LIKE';
export const DO_DISLIKE = 'DO_DISLIKE';

export const rulesLoaded = (rules) => {
    return {
        type: RULES_LOADED,
        rules
    };
};

export const loadRules = () => {
    return (dispatch) => {
        fetch('/rest/rules')
            .then(response => response.json())
            .then(rules => dispatch(rulesLoaded(rules)))
    }
};

export const doLikeSuccess = (ruleId) => {
    return {
    type : DO_LIKE,
    ruleId,
    }
};

export const doLike = (ruleId) => {
    return (dispatch) => {
        fetch(`/rest/rules/${ruleId}/likes`, {method: 'POST'})
            .then( () => dispatch(doLikeSuccess(ruleId)))
    }
};

export const doDislikeSuccess = (ruleId) => ({
    type : DO_DISLIKE,
    ruleId,
});

export const doDislike = (ruleId) => {
    return (dispatch) => {
        fetch(`/rest/rules/${ruleId}/dislikes`, {method: 'POST'})
            .then( () => dispatch(doDislikeSuccess(ruleId)))
    }
};
