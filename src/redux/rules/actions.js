import rules from '../../data.json';

export const RULES_LOADED = 'RULES_LOADED';
export const DO_LIKE = 'DO_LIKE';
export const DO_DISLIKE = 'DO_DISLIKE';

export const loadRules = () => {
    return {
        type : RULES_LOADED,
        rules,
    }
}

export const doLike = (ruleId) => {
    return {
        type : DO_LIKE,
        ruleId,
    }
}

export const doDislike = (ruleId) => {
    return {
        type : DO_DISLIKE,
        ruleId,
    }
}
