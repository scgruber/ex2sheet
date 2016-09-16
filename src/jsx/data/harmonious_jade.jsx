/* Character information reproduced from Exalted Core for
 * demonstration purposes. All content below is property of
 * White Wolf Publishing, Inc and believed to be Fair Use.
 */

module.exports = {
  "name": "Harmonious Jade",
  "player": "Sample",
  "type": "Solar Exalted",
  "caste": "Night",
  "concept": "Assassin",
  "motivation": "",
  "personality": "",
  "description": "",
  "essence": {
    "rating": 3,
    "personalBonus": 0,
    "peripheralBonus": 0
  },
  "animaBanner": "A shooting star; when iconic, the star appears to fire with her arrows",
  "willpower": {
    "rating": 6,
    "channeled": 0
  },
  "virtues": {
    "compassion": {
      "rating": 1,
      "channeled": 0
    },
    "conviction": {
      "rating": 3,
      "channeled": 0
    },
    "temperance": {
      "rating": 2,
      "channeled": 0
    },
    "valor": {
      "rating": 3,
      "channeled": 0
    }
  },
  "virtueFlaw": {
    "flaw": "",
    "effect": "",
    "duration": "",
    "trigger": ""
  },
  "attributes": {
    "strength": 3,
    "dexterity": 5,
    "stamina": 3,
    "charisma": 2,
    "manipulation": 2,
    "appearance": 3,
    "perception": 5,
    "intelligence": 2,
    "wits": 3
  },
  "abilities": {
    "Archery": {
      "rating": 5,
      "excellencies": [
        "3"
      ]
    },
    "Martial Arts": {
      "rating": 2,
      "excellencies": []
    },
    "Melee": {
      "rating": 3,
      "excellencies": []
    },
    "Thrown": {
      "rating": 0,
      "excellencies": []
    },
    "War": {
      "rating": 0,
      "excellencies": []
    },
    "Athletics": {
      "rating": 4,
      "excellencies": []
    },
    "Awareness": {
      "rating": 3,
      "excellencies": [
        "1"
      ]
    },
    "Dodge": {
      "rating": 4,
      "excellencies": [
        "1"
      ]
    },
    "Larceny": {
      "rating": 3,
      "excellencies": []
    },
    "Stealth": {
      "rating": 5,
      "excellencies": []
    },
    "Integrity": {
      "rating": 1,
      "excellencies": []
    },
    "Performance": {
      "rating": 0,
      "excellencies": []
    },
    "Presence": {
      "rating": 0,
      "excellencies": []
    },
    "Resistance": {
      "rating": 2,
      "excellencies": []
    },
    "Survival": {
      "rating": 1,
      "excellencies": []
    },
    "Bureaucracy": {
      "rating": 0,
      "excellencies": []
    },
    "Linguistics": {
      "rating": 1,
      "excellencies": []
    },
    "Ride": {
      "rating": 0,
      "excellencies": []
    },
    "Sail": {
      "rating": 0,
      "excellencies": []
    },
    "Socialize": {
      "rating": 0,
      "excellencies": []
    },
    "Craft": {
      "rating": 0,
      "excellencies": []
    },
    "Investigation": {
      "rating": 2,
      "excellencies": []
    },
    "Lore": {
      "rating": 1,
      "excellencies": []
    },
    "Medicine": {
      "rating": 0,
      "excellencies": []
    },
    "Occult": {
      "rating": 1,
      "excellencies": []
    }
  },
  "specialties": {
    "Archery: From Surprise": 3,
    "Lore: Prehistory": 1
  },
  "charms": [
    {
      "name": "Easily Overlooked Presence Method",
      "trait": "Stealth",
      "cost": "3m",
      "type": "Simple",
      "duration": "Scene",
      "combo": true,
      "effects": "Awareness/Investigation to notice the character fails unless in battle or have two-die circumstance bonus.",
      "source": "Core p230"
    },
    {
      "name": "Essence Arrow Attack",
      "trait": "Archery",
      "cost": "2m",
      "type": "Sup",
      "duration": "Instant",
      "obvious": true,
      "combo": true,
      "effects": "Add character's Essence in damage to an Archery attack. Additional effects: Fiery Arrow Attack, Dazzling Flare, Righteous Judgment Arrow.",
      "source": "Core p188"
    },
    {
      "name": "Invisible Statue Spirit",
      "trait": "Stealth",
      "cost": "5m",
      "type": "Simple",
      "duration": "Indefinite",
      "combo": true,
      "effects": "Impossible to notice character by any sense other than touch. Fades instantly if the character moves or joins battle.",
      "source": "Core p230"
    },
    {
      "name": "Lock-Opening Touch",
      "trait": "Larceny",
      "cost": "3m",
      "type": "Sup",
      "duration": "Instant",
      "combo": true,
      "effects": "Automatic success to pick mundane lock. Add Essence in successes to roll against magical effects. Charm is obvious if the character has no tools.",
      "source": "Core p229"
    },
    {
      "name": "Reflex Sidestep Technique",
      "trait": "Dodge",
      "cost": "1m",
      "type": "Ref (2)",
      "duration": "Instant",
      "combo": true,
      "effects": "Make an unexpected attack expected, allows use of defenses and charms.",
      "source": "Core p227"
    },
    {
      "name": "Shadow Over Water",
      "trait": "Dodge",
      "cost": "1m",
      "type": "Ref (2)",
      "duration": "Instant",
      "combo": true,
      "effects": "Ignore all penalties that apply to Dodge DV on one attack.",
      "source": "Core p227"
    },
    {
      "name": "There Is No Wind",
      "trait": "Archery",
      "cost": "3m/5m",
      "type": "Sup",
      "duration": "Instant",
      "combo": true,
      "effects": "Nullifies all penalties to an archery attack, except wound and multiple-action penalties. At Essence 3+, spend two additional motes to increase Range to maximum visible range.",
      "source": "Core p187"
    }
  ],
  "backgrounds": [
    {
      "type": "Artifact",
      "kind": "Short Powerbow",
      "name": "Eagle's Rain",
      "rating": 3,
      "material": "Orichalcum",
      "attune": {
        "personal": 0,
        "peripheral": 4
      },
      "notes": "Set with the Freedom Stone"
    },
    {
      "type": "Manse",
      "rating": 3
    },
    {
      "type": "Hearthstone",
      "kind": "Freedom Stone",
      "rating": 3,
      "notes": "Bearer cannot be physically restrained. Grapple, clinch, et al. maneuvers will automatically fail."
    },
    {
      "type": "Resources",
      "rating": 2
    }
  ],
  "possessions": [
    "Exceptional Knife",
    "Broadhead Arrows"
  ],
  "physicalAttacks": [
    {
      "name": "Exceptional Knife",
      "ability": "Melee",
      "speed": 5,
      "accuracyBonus": 2,
      "damageBonus": 3,
      "damageType": "L",
      "rate": 4,
      "defenseBonus": 1,
      "tagsAndNotes": ["T"]
    },
    {
      "name": "Eagle's Rain",
      "ability": "Archery",
      "speed": 6,
      "accuracyBonus": 3,
      "damageBonus": 5,
      "damageType": "L",
      "rate": 2,
      "range": 300,
      "tagsAndNotes": ["2","B"]
    }
  ]
}