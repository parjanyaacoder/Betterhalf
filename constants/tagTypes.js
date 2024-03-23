const tagTypes = {
    OWNERSHIP: 'OWNERSHIP',
    GROWTH: 'GROWTH',
    LEARNING: 'LEARNING',
    EXPERIENCES: 'EXPERIENCES',
    PROGRESS: 'PROGRESS',
    INNOVATION: 'INNOVATION',
    BALANCE: 'BALANCE',
    EXCELLENCE: 'EXCELLENCE',
    HUNGRY_FOR_GROWTH: 'HUNGRY_FOR_GROWTH',
    RESULT_ORIENTED: 'RESULT_ORIENTED',
    PASSIONATE: 'PASSIONATE',
}

const mapOfTagTypesToTagItems = {
    [tagTypes.OWNERSHIP]: {
        title: 'Ownership',
        subTitle: 'I will take 100% ownership of the features I deliver.',
    }
}

const getTagItemFromType = (tagType) => {
    return mapOfTagTypesToTagItems?.[tagType] || {};
}

export default {
    tagTypes,
    getTagItemFromType
};
