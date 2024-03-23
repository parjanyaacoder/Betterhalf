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
        subTitle: 'Taking 100% ownership of the features delivered.',
    },
    [tagTypes.GROWTH]: {
        title: 'Growth',
        subTitle: 'Always looking for opportunities to grow. A 10x growth attitude in all aspects of life.',
    },
    [tagTypes.RESULT_ORIENTED]: {
        title: 'Result Oriented',
        subTitle: 'Always aiming to deliver the best results possible.',
    },
    [tagTypes.INNOVATION]: {
        title: 'Innovation',
        subTitle: 'Loves diving deep into tech to tap new innovative ideas.',
    },
    [tagTypes.EXPERIENCES]: {
        title: 'Experiences',
        subTitle: 'In search for new experiences to learn and grow. Building a life full of amazing experiences.',
    },
    [tagTypes.LEARNING]: {
        title: 'Learning',
        subTitle: 'Learning from experiences, everyone around and by observing this beautiful world.The goal is to learn and excel.',
    },
    [tagTypes.PROGRESS]: {
        title: 'Progress',
        subTitle: 'Reaching infinity and beyond just like a rocket.',
    },
}

const getTagItemFromType = (tagType) => {
    return mapOfTagTypesToTagItems?.[tagType] || {};
}

export default {
    tagTypes,
    getTagItemFromType
};
