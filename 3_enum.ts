enum Membership {
    Basic,
    Standart,
    Premium
}

const membership = Membership.Standart
const membershipRevers = Membership[2]

console.log(membership)
console.log(membershipRevers)

enum Social {
    FACEBOOK = 'facebooc.com',
    ZOOM = 'zoom.com',
    Viber = 'viber.com'
}

const social = Social.ZOOM

console.log(social)