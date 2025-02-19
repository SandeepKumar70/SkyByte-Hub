// Copyright 2012 Google Inc. All rights reserved.

(function() {

    var data = {
        "resource": {
            "version": "9",

            "macros": [{
                "function": "__e"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "event_attributes.context"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "event_attributes.context_detail"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.coupon"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.currency"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.items"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "event_attributes.search_results"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "event_attributes.search_term"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.value"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "event_attributes.quantity_update"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "event_name"
            }, {
                "function": "__u",
                "vtp_component": "HOST",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__c",
                "vtp_value": "G-9Z72VQCKY0"
            }, {
                "function": "__c",
                "vtp_value": "G-ZKBVC1X78F"
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 11],
                "vtp_fullMatch": true,
                "vtp_replaceAfterMatch": true,
                "vtp_ignoreCase": true,
                "vtp_defaultValue": ["macro", 12],
                "vtp_map": ["list", ["map", "key", ".*(themeforest|codecanyon|audiojungle|videohive|3docean|graphicriver|photodune)-staging\\.net", "value", ["macro", 12]],
                    ["map", "key", ".*(themeforest|codecanyon|audiojungle|videohive|3docean|graphicriver|photodune)\\.net", "value", ["macro", 13]]
                ]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "app_name"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "app_env"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "app_version"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "page_type"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "event_attributes.custom_timestamp"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "event_attributes.event_type"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ga_param"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user_attributes.user_id"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "page_location"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "page_referrer"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "page_title"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user_attributes.market_user_id"
            }, {
                "function": "__gtes",
                "vtp_eventSettingsTable": ["list", ["map", "parameter", "app_name", "parameterValue", ["macro", 15]],
                    ["map", "parameter", "app_env", "parameterValue", ["macro", 16]],
                    ["map", "parameter", "app_version", "parameterValue", ["macro", 17]],
                    ["map", "parameter", "page_type", "parameterValue", ["macro", 18]],
                    ["map", "parameter", "custom_timestamp", "parameterValue", ["macro", 19]],
                    ["map", "parameter", "event_type", "parameterValue", ["macro", 20]],
                    ["map", "parameter", "ga_param", "parameterValue", ["macro", 21]],
                    ["map", "parameter", "user_id", "parameterValue", ["macro", 22]],
                    ["map", "parameter", "page_location", "parameterValue", ["macro", 23]],
                    ["map", "parameter", "page_referrer", "parameterValue", ["macro", 24]],
                    ["map", "parameter", "page_title", "parameterValue", ["macro", 25]]
                ],
                "vtp_userProperties": ["list", ["map", "name", "market_user_id", "value", ["macro", 26]]]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "event_attributes.click_label"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "event_attributes.click_type"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "event_attributes.custom_item_brand"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "event_attributes.custom_item_category"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "event_attributes.custom_item_id"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "event_attributes.custom_item_name"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "event_attributes.download_type"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "event_attributes.filter_type"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "event_attributes.filter_value"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "event_attributes.item_resolution"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "event_attributes.licence_type"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "event_attributes.link_anchor"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "event_attributes.link_domain"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "event_attributes.link_query"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "event_attributes.link_url"
            }, {
                "function": "__gtcs",
                "vtp_configSettingsTable": ["list", ["map", "parameter", "send_page_view", "parameterValue", "false"]]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "tag"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "sub_category"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "category"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": ["macro", 5]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "event_attributes.sort_by"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "event_attributes.page_number"
            }, {
                "function": "__u",
                "vtp_component": "URL",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__u",
                "vtp_component": "PATH",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__f",
                "vtp_component": "URL"
            }, {
                "function": "__e"
            }],
            "tags": [{
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": true,
                "vtp_getEcommerceDataFrom": "dataLayer",
                "vtp_eventSettingsTable": ["list", ["map", "parameter", "context", "parameterValue", ["macro", 1]],
                    ["map", "parameter", "context_detail", "parameterValue", ["macro", 2]],
                    ["map", "parameter", "coupon", "parameterValue", ["macro", 3]],
                    ["map", "parameter", "currency", "parameterValue", ["macro", 4]],
                    ["map", "parameter", "items", "parameterValue", ["macro", 5]],
                    ["map", "parameter", "search_results", "parameterValue", ["macro", 6]],
                    ["map", "parameter", "search_term", "parameterValue", ["macro", 7]],
                    ["map", "parameter", "value", "parameterValue", ["macro", 8]],
                    ["map", "parameter", "quantity_update", "parameterValue", ["macro", 9]]
                ],
                "vtp_enhancedUserId": false,
                "vtp_eventName": ["macro", 10],
                "vtp_measurementIdOverride": ["macro", 14],
                "vtp_eventSettingsVariable": ["macro", 27],
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": true,
                "vtp_migratedToV2": true,
                "vtp_demoV2": false,
                "tag_id": 61
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventSettingsTable": ["list", ["map", "parameter", "click_label", "parameterValue", ["macro", 28]],
                    ["map", "parameter", "click_type", "parameterValue", ["macro", 29]],
                    ["map", "parameter", "context", "parameterValue", ["macro", 1]],
                    ["map", "parameter", "context_detail", "parameterValue", ["macro", 2]],
                    ["map", "parameter", "custom_item_brand", "parameterValue", ["macro", 30]],
                    ["map", "parameter", "custom_item_category", "parameterValue", ["macro", 31]],
                    ["map", "parameter", "custom_item_id", "parameterValue", ["macro", 32]],
                    ["map", "parameter", "custom_item_name", "parameterValue", ["macro", 33]],
                    ["map", "parameter", "download_type", "parameterValue", ["macro", 34]],
                    ["map", "parameter", "filter_type", "parameterValue", ["macro", 35]],
                    ["map", "parameter", "filter_value", "parameterValue", ["macro", 36]],
                    ["map", "parameter", "item_resolution", "parameterValue", ["macro", 37]],
                    ["map", "parameter", "licence_type", "parameterValue", ["macro", 38]],
                    ["map", "parameter", "link_anchor", "parameterValue", ["macro", 39]],
                    ["map", "parameter", "link_domain", "parameterValue", ["macro", 40]],
                    ["map", "parameter", "link_query", "parameterValue", ["macro", 41]],
                    ["map", "parameter", "link_url", "parameterValue", ["macro", 42]],
                    ["map", "parameter", "search_results", "parameterValue", ["macro", 6]],
                    ["map", "parameter", "search_term", "parameterValue", ["macro", 7]]
                ],
                "vtp_enhancedUserId": false,
                "vtp_eventName": ["macro", 10],
                "vtp_measurementIdOverride": ["macro", 14],
                "vtp_eventSettingsVariable": ["macro", 27],
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": true,
                "vtp_migratedToV2": true,
                "vtp_demoV2": false,
                "tag_id": 80
            }, {
                "function": "__googtag",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_tagId": ["macro", 14],
                "vtp_configSettingsVariable": ["macro", 43],
                "tag_id": 85
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_enhancedUserId": false,
                "vtp_eventName": "page_view",
                "vtp_measurementIdOverride": ["macro", 14],
                "vtp_eventSettingsVariable": ["macro", 27],
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": true,
                "vtp_migratedToV2": true,
                "vtp_demoV2": false,
                "tag_id": 86
            }],
            "predicates": [{
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "e-commerce"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "track_event"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.init_consent"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "analytics_ready"
            }],
            "rules": [
                [
                    ["if", 0],
                    ["add", 0]
                ],
                [
                    ["if", 1],
                    ["add", 1]
                ],
                [
                    ["if", 2],
                    ["add", 2]
                ],
                [
                    ["if", 3],
                    ["add", 3]
                ]
            ]
        },
        "runtime": [
            [50, "__c", [46, "a"],
                [36, [17, [15, "a"], "value"]]
            ],
            [50, "__e", [46, "a"],
                [36, [13, [41, "$0"],
                    [3, "$0", ["require", "internal.getEventData"]],
                    ["$0", "event"]
                ]]
            ],
            [50, "__googtag", [46, "a"],
                [50, "l", [46, "u", "v"],
                    [66, "w", [2, [15, "b"], "keys", [7, [15, "v"]]],
                        [46, [43, [15, "u"],
                            [15, "w"],
                            [16, [15, "v"],
                                [15, "w"]
                            ]
                        ]]
                    ]
                ],
                [50, "m", [46],
                    [36, [7, [17, [17, [15, "d"], "SCHEMA"], "EP_SERVER_CONTAINER_URL"],
                        [17, [17, [15, "d"], "SCHEMA"], "EP_TRANSPORT_URL"]
                    ]]
                ],
                [50, "n", [46, "u"],
                    [52, "v", ["m"]],
                    [65, "w", [15, "v"],
                        [46, [53, [52, "x", [16, [15, "u"],
                                [15, "w"]
                            ]],
                            [22, [15, "x"],
                                [46, [36, [15, "x"]]]
                            ]
                        ]]
                    ],
                    [36, [44]]
                ],
                [52, "b", ["require", "Object"]],
                [52, "c", ["require", "createArgumentsQueue"]],
                [52, "d", [15, "__module_gtag"]],
                [52, "e", ["require", "internal.gtagConfig"]],
                [52, "f", ["require", "getType"]],
                [52, "g", ["require", "internal.loadGoogleTag"]],
                [52, "h", ["require", "logToConsole"]],
                [52, "i", ["require", "makeNumber"]],
                [52, "j", ["require", "makeString"]],
                [52, "k", ["require", "makeTableMap"]],
                [52, "o", [30, [17, [15, "a"], "tagId"], ""]],
                [22, [30, [21, ["f", [15, "o"]], "string"],
                        [24, [2, [15, "o"], "indexOf", [7, "-"]], 0]
                    ],
                    [46, ["h", [0, "Invalid Measurement ID for the GA4 Configuration tag: ", [15, "o"]]],
                        [2, [15, "a"], "gtmOnFailure", [7]],
                        [36]
                    ]
                ],
                [52, "p", [30, [17, [15, "a"], "configSettingsVariable"],
                    [8]
                ]],
                [52, "q", [30, ["k", [30, [17, [15, "a"], "configSettingsTable"],
                        [7]
                    ], "parameter", "parameterValue"],
                    [8]
                ]],
                ["l", [15, "p"],
                    [15, "q"]
                ],
                [52, "r", [30, [17, [15, "a"], "eventSettingsVariable"],
                    [8]
                ]],
                [52, "s", [30, ["k", [30, [17, [15, "a"], "eventSettingsTable"],
                        [7]
                    ], "parameter", "parameterValue"],
                    [8]
                ]],
                ["l", [15, "r"],
                    [15, "s"]
                ],
                [52, "t", [15, "p"]],
                ["l", [15, "t"],
                    [15, "r"]
                ],
                [22, [30, [2, [15, "t"], "hasOwnProperty", [7, [17, [17, [15, "d"], "SCHEMA"], "EP_USER_PROPERTIES"]]],
                        [17, [15, "a"], "userProperties"]
                    ],
                    [46, [53, [52, "u", [30, [16, [15, "t"],
                                [17, [17, [15, "d"], "SCHEMA"], "EP_USER_PROPERTIES"]
                            ],
                            [8]
                        ]],
                        ["l", [15, "u"],
                            [30, ["k", [30, [17, [15, "a"], "userProperties"],
                                    [7]
                                ], "name", "value"],
                                [8]
                            ]
                        ],
                        [43, [15, "t"],
                            [17, [17, [15, "d"], "SCHEMA"], "EP_USER_PROPERTIES"],
                            [15, "u"]
                        ]
                    ]]
                ],
                [2, [15, "d"], "convertParameters", [7, [15, "t"],
                    [17, [15, "d"], "GOLD_BOOLEAN_FIELDS"],
                    [51, "", [7, "u"],
                        [36, [39, [20, "false", [2, ["j", [15, "u"]], "toLowerCase", [7]]], false, [28, [28, [15, "u"]]]]]
                    ]
                ]],
                [2, [15, "d"], "convertParameters", [7, [15, "t"],
                    [17, [15, "d"], "GOLD_NUMERIC_FIELDS"],
                    [51, "", [7, "u"],
                        [36, ["i", [15, "u"]]]
                    ]
                ]],
                ["g", [15, "o"],
                    [8, "firstPartyUrl", ["n", [15, "t"]]]
                ],
                ["e", [15, "o"],
                    [15, "t"],
                    [8, "noTargetGroup", true]
                ],
                [2, [15, "a"], "gtmOnSuccess", [7]]
            ],
            [50, "__gtcs", [46, "a"],
                [52, "b", ["require", "makeTableMap"]],
                [36, [30, ["b", [30, [17, [15, "a"], "configSettingsTable"],
                        [7]
                    ], "parameter", "parameterValue"],
                    [8]
                ]]
            ],
            [50, "__gtes", [46, "a"],
                [50, "f", [46, "h", "i"],
                    [66, "j", [2, [15, "b"], "keys", [7, [15, "i"]]],
                        [46, [43, [15, "h"],
                            [15, "j"],
                            [16, [15, "i"],
                                [15, "j"]
                            ]
                        ]]
                    ]
                ],
                [52, "b", ["require", "Object"]],
                [52, "c", ["require", "getType"]],
                [52, "d", [15, "__module_gtag"]],
                [52, "e", ["require", "makeTableMap"]],
                [52, "g", [30, ["e", [30, [17, [15, "a"], "eventSettingsTable"],
                        [7]
                    ], "parameter", "parameterValue"],
                    [8]
                ]],
                [22, [17, [15, "a"], "userProperties"],
                    [46, [53, [41, "h"],
                        [3, "h", [30, [16, [15, "g"],
                                [17, [17, [15, "d"], "SCHEMA"], "EP_USER_PROPERTIES"]
                            ],
                            [8]
                        ]],
                        [22, [29, ["c", [15, "h"]], "object"],
                            [46, [3, "h", [8]]]
                        ],
                        ["f", [15, "h"],
                            [30, ["e", [30, [17, [15, "a"], "userProperties"],
                                    [7]
                                ], "name", "value"],
                                [8]
                            ]
                        ],
                        [43, [15, "g"],
                            [17, [17, [15, "d"], "SCHEMA"], "EP_USER_PROPERTIES"],
                            [15, "h"]
                        ]
                    ]]
                ],
                [36, [15, "g"]]
            ],
            [52, "__module_gtag", [13, [41, "$0"],
                [3, "$0", [51, "", [7],
                    [50, "a", [46],
                        [50, "f", [46, "g", "h", "i"],
                            [65, "j", [15, "h"],
                                [46, [22, [2, [15, "g"], "hasOwnProperty", [7, [15, "j"]]],
                                    [46, [43, [15, "g"],
                                        [15, "j"],
                                        ["i", [16, [15, "g"],
                                            [15, "j"]
                                        ]]
                                    ]]
                                ]]
                            ]
                        ],
                        [52, "b", ["require", "Object"]],
                        [52, "c", [2, [15, "b"], "freeze", [7, [8, "EP_FIRST_PARTY_COLLECTION", "first_party_collection", "EP_SERVER_CONTAINER_URL", "server_container_url", "EP_TRANSPORT_URL", "transport_url", "EP_USER_PROPERTIES", "user_properties"]]]],
                        [52, "d", [2, [15, "b"], "freeze", [7, [7, "allow_ad_personalization_signals", "allow_direct_google_requests", "allow_google_signals", "cookie_update", "ignore_referrer", "update", "first_party_collection", "send_page_view"]]]],
                        [52, "e", [2, [15, "b"], "freeze", [7, [7, "cookie_expires", "event_timeout", "session_duration", "session_engaged_time", "engagement_time_msec"]]]],
                        [36, [8, "SCHEMA", [15, "c"], "GOLD_BOOLEAN_FIELDS", [15, "d"], "GOLD_NUMERIC_FIELDS", [15, "e"], "convertParameters", [15, "f"]]]
                    ],
                    [36, ["a"]]
                ]],
                ["$0"]
            ]]

        ],
        "entities": {
            "__c": {
                "2": true,
                "4": true
            },
            "__e": {
                "2": true,
                "4": true
            },
            "__googtag": {
                "1": 10
            }


        },
        "blob": {
            "1": "9"
        },
        "permissions": {
            "__c": {},
            "__e": {
                "read_event_data": {
                    "eventDataAccess": "specific",
                    "keyPatterns": ["event"]
                }
            },
            "__googtag": {
                "logging": {
                    "environments": "debug"
                },
                "access_globals": {
                    "keys": [{
                        "key": "gtag",
                        "read": true,
                        "write": true,
                        "execute": true
                    }, {
                        "key": "dataLayer",
                        "read": true,
                        "write": true,
                        "execute": false
                    }]
                },
                "configure_google_tags": {
                    "allowedTagIds": "any"
                },
                "load_google_tags": {
                    "allowedTagIds": "any",
                    "allowFirstPartyUrls": true,
                    "allowedFirstPartyUrls": "any"
                }
            },
            "__gtcs": {},
            "__gtes": {}


        }



        ,
        "security_groups": {
            "google": [
                "__c",
                "__e",
                "__googtag",
                "__gtcs",
                "__gtes"

            ]


        }



    };

    var productSettings = {
        "AW-701043741": {
            "preAutoPii": true
        },
        "AW-800411572": {
            "preAutoPii": true
        },
        "AW-853740815": {
            "preAutoPii": true
        },
        "AW-921523952": {
            "preAutoPii": true
        },
        "AW-925190521": {
            "preAutoPii": true
        }
    };




    var h, da = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        ea = typeof Object.defineProperties == "function" ? Object.defineProperty : function(a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a
        },
        fa = function(a) {
            for (var b = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global], c = 0; c < b.length; ++c) {
                var d = b[c];
                if (d && d.Math == Math) return d
            }
            throw Error("Cannot find global object");
        },
        ha = fa(this),
        ia = function(a, b) {
            if (b) a: {
                for (var c = ha, d = a.split("."), e = 0; e < d.length - 1; e++) {
                    var f = d[e];
                    if (!(f in c)) break a;
                    c = c[f]
                }
                var g = d[d.length - 1],
                    k = c[g],
                    m = b(k);m != k && m != null && ea(c, g, {
                    configurable: !0,
                    writable: !0,
                    value: m
                })
            }
        };
    ia("Symbol", function(a) {
        if (a) return a;
        var b = function(f, g) {
            this.j = f;
            ea(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        };
        b.prototype.toString = function() {
            return this.j
        };
        var c = "jscomp_symbol_" + (Math.random() * 1E9 >>> 0) + "_",
            d = 0,
            e = function(f) {
                if (this instanceof e) throw new TypeError("Symbol is not a constructor");
                return new b(c + (f || "") + "_" + d++, f)
            };
        return e
    });
    var la = typeof Object.create == "function" ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        na;
    if (typeof Object.setPrototypeOf == "function") na = Object.setPrototypeOf;
    else {
        var oa;
        a: {
            var pa = {
                    a: !0
                },
                qa = {};
            try {
                qa.__proto__ = pa;
                oa = qa.a;
                break a
            } catch (a) {}
            oa = !1
        }
        na = oa ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ra = na,
        sa = function(a, b) {
            a.prototype = la(b.prototype);
            a.prototype.constructor = a;
            if (ra) ra(a, b);
            else
                for (var c in b)
                    if (c != "prototype")
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.vo = b.prototype
        },
        l = function(a) {
            var b = typeof Symbol != "undefined" && Symbol.iterator && a[Symbol.iterator];
            if (b) return b.call(a);
            if (typeof a.length == "number") return {
                next: da(a)
            };
            throw Error(String(a) + " is not an iterable or ArrayLike");
        },
        ta = function(a) {
            for (var b,
                    c = []; !(b = a.next()).done;) c.push(b.value);
            return c
        },
        ua = function(a) {
            return a instanceof Array ? a : ta(l(a))
        },
        wa = function(a) {
            return va(a, a)
        },
        va = function(a, b) {
            a.raw = b;
            Object.freeze && (Object.freeze(a), Object.freeze(b));
            return a
        },
        xa = typeof Object.assign == "function" ? Object.assign : function(a, b) {
            for (var c = 1; c < arguments.length; c++) {
                var d = arguments[c];
                if (d)
                    for (var e in d) Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e])
            }
            return a
        };
    ia("Object.assign", function(a) {
        return a || xa
    });
    var ya = function() {
        for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
        return b
    };
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var za = this || self;
    var Aa = function(a, b) {
        this.type = a;
        this.data = b
    };
    var Ba = function() {
        this.map = {};
        this.j = {}
    };
    Ba.prototype.get = function(a) {
        return this.map["dust." + a]
    };
    Ba.prototype.set = function(a, b) {
        var c = "dust." + a;
        this.j.hasOwnProperty(c) || (this.map[c] = b)
    };
    Ba.prototype.has = function(a) {
        return this.map.hasOwnProperty("dust." + a)
    };
    Ba.prototype.remove = function(a) {
        var b = "dust." + a;
        this.j.hasOwnProperty(b) || delete this.map[b]
    };
    var Ca = function(a, b) {
        var c = [],
            d;
        for (d in a.map)
            if (a.map.hasOwnProperty(d)) {
                var e = d.substring(5);
                switch (b) {
                    case 1:
                        c.push(e);
                        break;
                    case 2:
                        c.push(a.map[d]);
                        break;
                    case 3:
                        c.push([e, a.map[d]])
                }
            }
        return c
    };
    Ba.prototype.ka = function() {
        return Ca(this, 1)
    };
    Ba.prototype.Xb = function() {
        return Ca(this, 2)
    };
    Ba.prototype.Fb = function() {
        return Ca(this, 3)
    };
    var Ea = function() {};
    Ea.prototype.reset = function() {};
    var Fa = function(a, b) {
        this.K = a;
        this.parent = b;
        this.j = this.C = void 0;
        this.xc = !1;
        this.H = function(c, d, e) {
            return c.apply(d, e)
        };
        this.values = new Ba
    };
    Fa.prototype.add = function(a, b) {
        Ha(this, a, b, !1)
    };
    var Ha = function(a, b, c, d) {
        if (!a.xc)
            if (d) {
                var e = a.values;
                e.set(b, c);
                e.j["dust." + b] = !0
            } else a.values.set(b, c)
    };
    Fa.prototype.set = function(a, b) {
        this.xc || (!this.values.has(a) && this.parent && this.parent.has(a) ? this.parent.set(a, b) : this.values.set(a, b))
    };
    Fa.prototype.get = function(a) {
        return this.values.has(a) ? this.values.get(a) : this.parent ? this.parent.get(a) : void 0
    };
    Fa.prototype.has = function(a) {
        return !!this.values.has(a) || !(!this.parent || !this.parent.has(a))
    };
    var Ia = function(a) {
        var b = new Fa(a.K, a);
        a.C && (b.C = a.C);
        b.H = a.H;
        b.j = a.j;
        return b
    };
    Fa.prototype.Md = function() {
        return this.K
    };
    Fa.prototype.Ha = function() {
        this.xc = !0
    };

    function Ja(a, b) {
        for (var c, d = l(b), e = d.next(); !e.done && !(c = Ka(a, e.value), c instanceof Aa); e = d.next());
        return c
    }

    function Ka(a, b) {
        try {
            var c = l(b),
                d = c.next().value,
                e = ta(c),
                f = a.get(String(d));
            if (!f || typeof f.invoke !== "function") throw Error("Attempting to execute non-function " + b[0] + ".");
            return f.invoke.apply(f, [a].concat(ua(e)))
        } catch (k) {
            var g = a.C;
            g && g(k, b.context ? {
                id: b[0],
                line: b.context.line
            } : null);
            throw k;
        }
    };
    var La = function() {
        this.C = new Ea;
        this.j = new Fa(this.C)
    };
    h = La.prototype;
    h.Md = function() {
        return this.C
    };
    h.execute = function(a) {
        return this.vi([a].concat(ua(ya.apply(1, arguments))))
    };
    h.vi = function() {
        for (var a, b = l(ya.apply(0, arguments)), c = b.next(); !c.done; c = b.next()) a = Ka(this.j, c.value);
        return a
    };
    h.El = function(a) {
        var b = ya.apply(1, arguments),
            c = Ia(this.j);
        c.j = a;
        for (var d, e = l(b), f = e.next(); !f.done; f = e.next()) d = Ka(c, f.value);
        return d
    };
    h.Ha = function() {
        this.j.Ha()
    };
    var Ma = function() {
        this.C = !1;
        this.j = new Ba
    };
    h = Ma.prototype;
    h.get = function(a) {
        return this.j.get(a)
    };
    h.set = function(a, b) {
        this.C || this.j.set(a, b)
    };
    h.has = function(a) {
        return this.j.has(a)
    };
    h.remove = function(a) {
        this.C || this.j.remove(a)
    };
    h.ka = function() {
        return this.j.ka()
    };
    h.Xb = function() {
        return this.j.Xb()
    };
    h.Fb = function() {
        return this.j.Fb()
    };
    h.Ha = function() {
        this.C = !0
    };
    h.xc = function() {
        return this.C
    };

    function Na() {
        for (var a = Oa, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
        return b
    }

    function Pa() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var Oa, Qa;

    function Ra(a) {
        Oa = Oa || Pa();
        Qa = Qa || Na();
        for (var b = [], c = 0; c < a.length; c += 3) {
            var d = c + 1 < a.length,
                e = c + 2 < a.length,
                f = a.charCodeAt(c),
                g = d ? a.charCodeAt(c + 1) : 0,
                k = e ? a.charCodeAt(c + 2) : 0,
                m = f >> 2,
                n = (f & 3) << 4 | g >> 4,
                p = (g & 15) << 2 | k >> 6,
                q = k & 63;
            e || (q = 64, d || (p = 64));
            b.push(Oa[m], Oa[n], Oa[p], Oa[q])
        }
        return b.join("")
    }

    function Ta(a) {
        function b(m) {
            for (; d < a.length;) {
                var n = a.charAt(d++),
                    p = Qa[n];
                if (p != null) return p;
                if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
            }
            return m
        }
        Oa = Oa || Pa();
        Qa = Qa || Na();
        for (var c = "", d = 0;;) {
            var e = b(-1),
                f = b(0),
                g = b(64),
                k = b(64);
            if (k === 64 && e === -1) return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            g !== 64 && (c += String.fromCharCode(f << 4 & 240 | g >> 2), k !== 64 && (c += String.fromCharCode(g << 6 & 192 | k)))
        }
    };
    var Ua = {};

    function Va(a, b) {
        Ua[a] = Ua[a] || [];
        Ua[a][b] = !0
    }

    function Wa(a) {
        var b = Ua[a];
        if (!b || b.length === 0) return "";
        for (var c = [], d = 0, e = 0; e < b.length; e++) e % 8 === 0 && e > 0 && (c.push(String.fromCharCode(d)), d = 0), b[e] && (d |= 1 << e % 8);
        d > 0 && c.push(String.fromCharCode(d));
        return Ra(c.join("")).replace(/\.+$/, "")
    }

    function Ya() {
        for (var a = [], b = Ua.fdr || [], c = 0; c < b.length; c++) b[c] && a.push(c);
        return a.length > 0 ? a : void 0
    };

    function Za() {}

    function $a(a) {
        return typeof a === "function"
    }

    function z(a) {
        return typeof a === "string"
    }

    function ab(a) {
        return typeof a === "number" && !isNaN(a)
    }

    function bb(a) {
        return Array.isArray(a) ? a : [a]
    }

    function cb(a, b) {
        if (a && Array.isArray(a))
            for (var c = 0; c < a.length; c++)
                if (a[c] && b(a[c])) return a[c]
    }

    function db(a, b) {
        if (!ab(a) || !ab(b) || a > b) a = 0, b = 2147483647;
        return Math.floor(Math.random() * (b - a + 1) + a)
    }

    function eb(a, b) {
        for (var c = new fb, d = 0; d < a.length; d++) c.set(a[d], !0);
        for (var e = 0; e < b.length; e++)
            if (c.get(b[e])) return !0;
        return !1
    }

    function hb(a, b) {
        for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
    }

    function ib(a) {
        return !!a && (Object.prototype.toString.call(a) === "[object Arguments]" || Object.prototype.hasOwnProperty.call(a, "callee"))
    }

    function jb(a) {
        return Math.round(Number(a)) || 0
    }

    function kb(a) {
        return "false" === String(a).toLowerCase() ? !1 : !!a
    }

    function lb(a) {
        var b = [];
        if (Array.isArray(a))
            for (var c = 0; c < a.length; c++) b.push(String(a[c]));
        return b
    }

    function mb(a) {
        return a ? a.replace(/^\s+|\s+$/g, "") : ""
    }

    function nb() {
        return new Date(Date.now())
    }

    function ob() {
        return nb().getTime()
    }
    var fb = function() {
        this.prefix = "gtm.";
        this.values = {}
    };
    fb.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b
    };
    fb.prototype.get = function(a) {
        return this.values[this.prefix + a]
    };
    fb.prototype.contains = function(a) {
        return this.get(a) !== void 0
    };

    function pb(a, b, c) {
        return a && a.hasOwnProperty(b) ? a[b] : c
    }

    function qb(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = void 0;
                try {
                    c()
                } catch (d) {}
            }
        }
    }

    function rb(a, b) {
        for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
    }

    function sb(a, b) {
        for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
        return c
    }

    function tb(a, b) {
        return a.length >= b.length && a.substring(0, b.length) === b
    }

    function ub(a, b) {
        return a.length >= b.length && a.substring(a.length - b.length, a.length) === b
    }

    function vb(a, b) {
        var c = B;
        b = b || [];
        for (var d = c, e = 0; e < a.length - 1; e++) {
            if (!d.hasOwnProperty(a[e])) return;
            d = d[a[e]];
            if (b.indexOf(d) >= 0) return
        }
        return d
    }

    function wb(a, b) {
        for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
        d[e[e.length - 1]] = b;
        return c
    }
    var xb = /^\w{1,9}$/;

    function yb(a, b) {
        a = a || {};
        b = b || ",";
        var c = [];
        hb(a, function(d, e) {
            xb.test(d) && e && c.push(d)
        });
        return c.join(b)
    }

    function zb(a, b) {
        function c() {
            e && ++d === b && (e(), e = null, c.done = !0)
        }
        var d = 0,
            e = a;
        c.done = !1;
        return c
    }

    function Ab(a) {
        if (!a) return a;
        var b = a;
        try {
            b = decodeURIComponent(a)
        } catch (d) {}
        var c = b.split(",");
        return c.length === 2 && c[0] === c[1] ? c[0] : a
    }

    function Bb(a, b, c) {
        function d(n) {
            var p = n.split("=")[0];
            if (a.indexOf(p) < 0) return n;
            if (c !== void 0) return p + "=" + c
        }

        function e(n) {
            return n.split("&").map(d).filter(function(p) {
                return p !== void 0
            }).join("&")
        }
        var f = b.href.split(/[?#]/)[0],
            g = b.search,
            k = b.hash;
        g[0] === "?" && (g = g.substring(1));
        k[0] === "#" && (k = k.substring(1));
        g = e(g);
        k = e(k);
        g !== "" && (g = "?" + g);
        k !== "" && (k = "#" + k);
        var m = "" + f + g + k;
        m[m.length - 1] === "/" && (m = m.substring(0, m.length - 1));
        return m
    }

    function Cb(a) {
        for (var b = 0; b < 3; ++b) try {
            var c = decodeURIComponent(a).replace(/\+/g, " ");
            if (c === a) break;
            a = c
        } catch (d) {
            return ""
        }
        return a
    };
    /*

     Copyright Google LLC
     SPDX-License-Identifier: Apache-2.0
    */
    var Db = globalThis.trustedTypes,
        Eb;

    function Fb() {
        var a = null;
        if (!Db) return a;
        try {
            var b = function(c) {
                return c
            };
            a = Db.createPolicy("goog#html", {
                createHTML: b,
                createScript: b,
                createScriptURL: b
            })
        } catch (c) {}
        return a
    }

    function Gb() {
        Eb === void 0 && (Eb = Fb());
        return Eb
    };
    var Hb = function(a) {
        this.j = a
    };
    Hb.prototype.toString = function() {
        return this.j + ""
    };

    function Ib(a) {
        var b = a,
            c = Gb();
        return new Hb(c ? c.createScriptURL(b) : b)
    }

    function Jb(a) {
        if (a instanceof Hb) return a.j;
        throw Error("");
    };
    var Kb = wa([""]),
        Lb = va(["\x00"], ["\\0"]),
        Mb = va(["\n"], ["\\n"]),
        Nb = va(["\x00"], ["\\u0000"]);

    function Ob(a) {
        return a.toString().indexOf("`") === -1
    }
    Ob(function(a) {
        return a(Kb)
    }) || Ob(function(a) {
        return a(Lb)
    }) || Ob(function(a) {
        return a(Mb)
    }) || Ob(function(a) {
        return a(Nb)
    });
    var Pb = function(a) {
        this.j = a
    };
    Pb.prototype.toString = function() {
        return this.j
    };
    var Qb = function(a) {
        this.Um = a
    };

    function Rb(a) {
        return new Qb(function(b) {
            return b.substr(0, a.length + 1).toLowerCase() === a + ":"
        })
    }
    var Sb = [Rb("data"), Rb("http"), Rb("https"), Rb("mailto"), Rb("ftp"), new Qb(function(a) {
        return /^[^:]*([/?#]|$)/.test(a)
    })];

    function Tb(a) {
        var b;
        b = b === void 0 ? Sb : b;
        if (a instanceof Pb) return a;
        for (var c = 0; c < b.length; ++c) {
            var d = b[c];
            if (d instanceof Qb && d.Um(a)) return new Pb(a)
        }
    }
    var Ub = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;

    function Vb(a) {
        var b;
        if (a instanceof Pb)
            if (a instanceof Pb) b = a.j;
            else throw Error("");
        else b = Ub.test(a) ? a : void 0;
        return b
    };

    function Wb(a, b) {
        var c = Vb(b);
        c !== void 0 && (a.action = c)
    };
    var Xb = function(a) {
        this.j = a
    };
    Xb.prototype.toString = function() {
        return this.j + ""
    };
    var Zb = function() {
        this.j = Yb[0].toLowerCase()
    };
    Zb.prototype.toString = function() {
        return this.j
    };

    function $b(a, b) {
        var c = [new Zb];
        if (c.length === 0) throw Error("");
        var d = c.map(function(f) {
                var g;
                if (f instanceof Zb) g = f.j;
                else throw Error("");
                return g
            }),
            e = b.toLowerCase();
        if (d.every(function(f) {
                return e.indexOf(f) !== 0
            })) throw Error('Attribute "' + b + '" does not match any of the allowed prefixes.');
        a.setAttribute(b, "true")
    };
    var ac = Array.prototype.indexOf ? function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    } : function(a, b) {
        if (typeof a === "string") return typeof b !== "string" || b.length != 1 ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    };
    "ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR NOBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(" ").concat(["BUTTON",
        "INPUT"
    ]);

    function bc(a) {
        return a === null ? "null" : a === void 0 ? "undefined" : a
    };
    var B = window,
        cc = window.history,
        F = document,
        dc = navigator;

    function ec() {
        var a;
        try {
            a = dc.serviceWorker
        } catch (b) {
            return
        }
        return a
    }
    var fc = F.currentScript,
        gc = fc && fc.src;

    function hc(a, b) {
        var c = B[a];
        B[a] = c === void 0 ? b : c;
        return B[a]
    }

    function ic(a) {
        return (dc.userAgent || "").indexOf(a) !== -1
    }

    function jc() {
        return (ic("GSA") || ic("GoogleApp")) && (ic("iPhone") || ic("iPad"))
    }
    var kc = {
            async: 1,
            nonce: 1,
            onerror: 1,
            onload: 1,
            src: 1,
            type: 1
        },
        lc = {
            onload: 1,
            src: 1,
            width: 1,
            height: 1,
            style: 1
        };

    function mc(a, b, c) {
        b && hb(b, function(d, e) {
            d = d.toLowerCase();
            c.hasOwnProperty(d) || a.setAttribute(d, e)
        })
    }

    function nc(a, b, c, d, e) {
        var f = F.createElement("script");
        mc(f, d, kc);
        f.type = "text/javascript";
        f.async = d && d.async === !1 ? !1 : !0;
        var g;
        g = Ib(bc(a));
        f.src = Jb(g);
        var k, m = f.ownerDocument;
        m = m === void 0 ? document : m;
        var n, p, q = (p = (n = m).querySelector) == null ? void 0 : p.call(n, "script[nonce]");
        (k = q == null ? "" : q.nonce || q.getAttribute("nonce") || "") && f.setAttribute("nonce", k);
        b && (f.onload = b);
        c && (f.onerror = c);
        if (e) e.appendChild(f);
        else {
            var r = F.getElementsByTagName("script")[0] || F.body || F.head;
            r.parentNode.insertBefore(f, r)
        }
        return f
    }

    function oc() {
        if (gc) {
            var a = gc.toLowerCase();
            if (a.indexOf("https://") === 0) return 2;
            if (a.indexOf("http://") === 0) return 3
        }
        return 1
    }

    function pc(a, b, c, d, e, f) {
        f = f === void 0 ? !0 : f;
        var g = e,
            k = !1;
        g || (g = F.createElement("iframe"), k = !0);
        mc(g, c, lc);
        d && hb(d, function(n, p) {
            g.dataset[n] = p
        });
        f && (g.height = "0", g.width = "0", g.style.display = "none", g.style.visibility = "hidden");
        a !== void 0 && (g.src = a);
        if (k) {
            var m = F.body && F.body.lastChild || F.body || F.head;
            m.parentNode.insertBefore(g, m)
        }
        b && (g.onload = b);
        return g
    }

    function rc(a, b, c, d) {
        return sc(a, b, c, d)
    }

    function tc(a, b, c, d) {
        a.addEventListener && a.addEventListener(b, c, !!d)
    }

    function uc(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }

    function G(a) {
        B.setTimeout(a, 0)
    }

    function vc(a, b) {
        return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
    }

    function wc(a) {
        var b = a.innerText || a.textContent || "";
        b && b !== " " && (b = b.replace(/^[\s\xa0]+/g, ""), b = b.replace(/[\s\xa0]+$/g, ""));
        b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
        return b
    }

    function xc(a) {
        var b = F.createElement("div"),
            c = b,
            d, e = bc("A<div>" + a + "</div>"),
            f = Gb();
        d = new Xb(f ? f.createHTML(e) : e);
        if (c.nodeType === 1 && /^(script|style)$/i.test(c.tagName)) throw Error("");
        var g;
        if (d instanceof Xb) g = d.j;
        else throw Error("");
        c.innerHTML = g;
        b = b.lastChild;
        for (var k = []; b && b.firstChild;) k.push(b.removeChild(b.firstChild));
        return k
    }

    function yc(a, b, c) {
        c = c || 100;
        for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
        for (var f = a, g = 0; f && g <= c; g++) {
            if (d[String(f.tagName).toLowerCase()]) return f;
            f = f.parentElement
        }
        return null
    }

    function zc(a, b, c) {
        var d;
        try {
            d = dc.sendBeacon && dc.sendBeacon(a)
        } catch (e) {
            Va("TAGGING", 15)
        }
        d ? b == null || b() : sc(a, b, c)
    }

    function Ac(a, b) {
        try {
            return dc.sendBeacon(a, b)
        } catch (c) {
            Va("TAGGING", 15)
        }
        return !1
    }
    var Bc = {
        cache: "no-store",
        credentials: "include",
        keepalive: !0,
        method: "POST",
        mode: "no-cors",
        redirect: "follow"
    };

    function Cc(a, b, c, d, e) {
        if (Dc()) {
            var f = Object.assign({}, Bc);
            b && (f.body = b);
            c && (c.attributionReporting && (f.attributionReporting = c.attributionReporting), c.browsingTopics && (f.browsingTopics = c.browsingTopics), c.credentials && (f.credentials = c.credentials), c.mode && (f.mode = c.mode));
            try {
                var g = B.fetch(a, f);
                if (g) return g.then(function(m) {
                    m && (m.ok || m.status === 0) ? d == null || d() : e == null || e()
                }).catch(function() {
                    e == null || e()
                }), !0
            } catch (m) {}
        }
        if (c && c.xk) return e == null || e(), !1;
        if (b) {
            var k = Ac(a, b);
            k ? d == null || d() : e == null ||
                e();
            return k
        }
        zc(a, d, e);
        return !0
    }

    function Dc() {
        return typeof B.fetch === "function"
    }

    function Ec(a, b) {
        var c = a[b];
        c && typeof c.animVal === "string" && (c = c.animVal);
        return c
    }

    function Fc() {
        var a = B.performance;
        if (a && $a(a.now)) return a.now()
    }

    function Gc() {
        var a, b = B.performance;
        if (b && b.getEntriesByType) try {
            var c = b.getEntriesByType("navigation");
            c && c.length > 0 && (a = c[0].type)
        } catch (d) {
            return "e"
        }
        if (!a) return "u";
        switch (a) {
            case "navigate":
                return "n";
            case "back_forward":
                return "h";
            case "reload":
                return "r";
            case "prerender":
                return "p";
            default:
                return "x"
        }
    }

    function Hc() {
        return B.performance || void 0
    }

    function Ic() {
        var a = B.webPixelsManager;
        return a ? a.createShopifyExtend !== void 0 : !1
    }
    var sc = function(a, b, c, d) {
        var e = new Image(1, 1);
        mc(e, d, {});
        e.onload = function() {
            e.onload = null;
            b && b()
        };
        e.onerror = function() {
            e.onerror = null;
            c && c()
        };
        e.src = a;
        return e
    };

    function Jc(a, b) {
        return this.evaluate(a) && this.evaluate(b)
    }

    function Kc(a, b) {
        return this.evaluate(a) === this.evaluate(b)
    }

    function Lc(a, b) {
        return this.evaluate(a) || this.evaluate(b)
    }

    function Mc(a, b) {
        var c = this.evaluate(a),
            d = this.evaluate(b);
        return String(c).indexOf(String(d)) > -1
    }

    function Nc(a, b) {
        var c = String(this.evaluate(a)),
            d = String(this.evaluate(b));
        return c.substring(0, d.length) === d
    }

    function Oc(a, b) {
        var c = this.evaluate(a),
            d = this.evaluate(b);
        switch (c) {
            case "pageLocation":
                var e = B.location.href;
                d instanceof Ma && d.get("stripProtocol") && (e = e.replace(/^https?:\/\//, ""));
                return e
        }
    };

    function Pc() {
        var a = !1;
        return a
    };
    var Qc = function(a) {
        var b;
        b = Error.call(this, a);
        this.message = b.message;
        "stack" in b && (this.stack = b.stack)
    };
    sa(Qc, Error);
    /*
     jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license.
    */
    var Rc = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        Sc = function(a) {
            if (a == null) return String(a);
            var b = Rc.exec(Object.prototype.toString.call(Object(a)));
            return b ? b[1].toLowerCase() : "object"
        },
        Tc = function(a, b) {
            return Object.prototype.hasOwnProperty.call(Object(a), b)
        },
        Uc = function(a) {
            if (!a || Sc(a) != "object" || a.nodeType || a == a.window) return !1;
            try {
                if (a.constructor && !Tc(a, "constructor") && !Tc(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            for (var b in a);
            return b === void 0 ||
                Tc(a, b)
        },
        Vc = function(a, b) {
            var c = b || (Sc(a) == "array" ? [] : {}),
                d;
            for (d in a)
                if (Tc(a, d)) {
                    var e = a[d];
                    Sc(e) == "array" ? (Sc(c[d]) != "array" && (c[d] = []), c[d] = Vc(e, c[d])) : Uc(e) ? (Uc(c[d]) || (c[d] = {}), c[d] = Vc(e, c[d])) : c[d] = e
                }
            return c
        };

    function Wc(a) {
        if (a == void 0 || Array.isArray(a) || Uc(a)) return !0;
        switch (typeof a) {
            case "boolean":
            case "number":
            case "string":
            case "function":
                return !0
        }
        return !1
    }

    function Xc(a) {
        return typeof a === "number" && a >= 0 && isFinite(a) && a % 1 === 0 || typeof a === "string" && a[0] !== "-" && a === "" + parseInt(a)
    };
    var Yc = function(a) {
        a = a === void 0 ? [] : a;
        this.j = new Ba;
        this.values = [];
        this.C = !1;
        for (var b in a) a.hasOwnProperty(b) && (Xc(b) ? this.values[Number(b)] = a[Number(b)] : this.j.set(b, a[b]))
    };
    h = Yc.prototype;
    h.toString = function(a) {
        if (a && a.indexOf(this) >= 0) return "";
        for (var b = [], c = 0; c < this.values.length; c++) {
            var d = this.values[c];
            d === null || d === void 0 ? b.push("") : d instanceof Yc ? (a = a || [], a.push(this), b.push(d.toString(a)), a.pop()) : b.push(String(d))
        }
        return b.join(",")
    };
    h.set = function(a, b) {
        if (!this.C)
            if (a === "length") {
                if (!Xc(b)) {
                    if (Pc()) throw new Qc("RangeError: Length property must be a valid integer.");
                    throw Error("RangeError: Length property must be a valid integer.");
                }
                this.values.length = Number(b)
            } else Xc(a) ? this.values[Number(a)] = b : this.j.set(a, b)
    };
    h.get = function(a) {
        return a === "length" ? this.length() : Xc(a) ? this.values[Number(a)] : this.j.get(a)
    };
    h.length = function() {
        return this.values.length
    };
    h.ka = function() {
        for (var a = this.j.ka(), b = 0; b < this.values.length; b++) this.values.hasOwnProperty(b) && a.push(String(b));
        return a
    };
    h.Xb = function() {
        for (var a = this.j.Xb(), b = 0; b < this.values.length; b++) this.values.hasOwnProperty(b) && a.push(this.values[b]);
        return a
    };
    h.Fb = function() {
        for (var a = this.j.Fb(), b = 0; b < this.values.length; b++) this.values.hasOwnProperty(b) && a.push([String(b), this.values[b]]);
        return a
    };
    h.remove = function(a) {
        Xc(a) ? delete this.values[Number(a)] : this.C || this.j.remove(a)
    };
    h.pop = function() {
        return this.values.pop()
    };
    h.push = function() {
        return this.values.push.apply(this.values, ua(ya.apply(0, arguments)))
    };
    h.shift = function() {
        return this.values.shift()
    };
    h.splice = function(a, b) {
        var c = ya.apply(2, arguments);
        return b === void 0 && c.length === 0 ? new Yc(this.values.splice(a)) : new Yc(this.values.splice.apply(this.values, [a, b || 0].concat(ua(c))))
    };
    h.unshift = function() {
        return this.values.unshift.apply(this.values, ua(ya.apply(0, arguments)))
    };
    h.has = function(a) {
        return Xc(a) && this.values.hasOwnProperty(a) || this.j.has(a)
    };
    h.Ha = function() {
        this.C = !0;
        Object.freeze(this.values)
    };
    h.xc = function() {
        return this.C
    };

    function Zc(a) {
        for (var b = [], c = 0; c < a.length(); c++) a.has(c) && (b[c] = a.get(c));
        return b
    };
    var $c = function(a, b) {
        this.functionName = a;
        this.Ld = b;
        this.j = new Ba;
        this.C = !1
    };
    h = $c.prototype;
    h.toString = function() {
        return this.functionName
    };
    h.getName = function() {
        return this.functionName
    };
    h.getKeys = function() {
        return new Yc(this.ka())
    };
    h.invoke = function(a) {
        return this.Ld.call.apply(this.Ld, [new ad(this, a)].concat(ua(ya.apply(1, arguments))))
    };
    h.hb = function(a) {
        var b = ya.apply(1, arguments);
        try {
            return this.invoke.apply(this, [a].concat(ua(b)))
        } catch (c) {}
    };
    h.get = function(a) {
        return this.j.get(a)
    };
    h.set = function(a, b) {
        this.C || this.j.set(a, b)
    };
    h.has = function(a) {
        return this.j.has(a)
    };
    h.remove = function(a) {
        this.C || this.j.remove(a)
    };
    h.ka = function() {
        return this.j.ka()
    };
    h.Xb = function() {
        return this.j.Xb()
    };
    h.Fb = function() {
        return this.j.Fb()
    };
    h.Ha = function() {
        this.C = !0
    };
    h.xc = function() {
        return this.C
    };
    var bd = function(a, b) {
        $c.call(this, a, b)
    };
    sa(bd, $c);
    var cd = function(a, b) {
        $c.call(this, a, b)
    };
    sa(cd, $c);
    var ad = function(a, b) {
        this.Ld = a;
        this.D = b
    };
    ad.prototype.evaluate = function(a) {
        var b = this.D;
        return Array.isArray(a) ? Ka(b, a) : a
    };
    ad.prototype.getName = function() {
        return this.Ld.getName()
    };
    ad.prototype.Md = function() {
        return this.D.Md()
    };
    var dd = function() {
        this.map = new Map
    };
    dd.prototype.set = function(a, b) {
        this.map.set(a, b)
    };
    dd.prototype.get = function(a) {
        return this.map.get(a)
    };
    var ed = function() {
        this.keys = [];
        this.values = []
    };
    ed.prototype.set = function(a, b) {
        this.keys.push(a);
        this.values.push(b)
    };
    ed.prototype.get = function(a) {
        var b = this.keys.indexOf(a);
        if (b > -1) return this.values[b]
    };

    function fd() {
        try {
            return Map ? new dd : new ed
        } catch (a) {
            return new ed
        }
    };
    var gd = function(a) {
        if (a instanceof gd) return a;
        if (Wc(a)) throw Error("Type of given value has an equivalent Pixie type.");
        this.value = a
    };
    gd.prototype.getValue = function() {
        return this.value
    };
    gd.prototype.toString = function() {
        return String(this.value)
    };
    var id = function(a) {
        this.promise = a;
        this.C = !1;
        this.j = new Ba;
        this.j.set("then", hd(this));
        this.j.set("catch", hd(this, !0));
        this.j.set("finally", hd(this, !1, !0))
    };
    h = id.prototype;
    h.get = function(a) {
        return this.j.get(a)
    };
    h.set = function(a, b) {
        this.C || this.j.set(a, b)
    };
    h.has = function(a) {
        return this.j.has(a)
    };
    h.remove = function(a) {
        this.C || this.j.remove(a)
    };
    h.ka = function() {
        return this.j.ka()
    };
    h.Xb = function() {
        return this.j.Xb()
    };
    h.Fb = function() {
        return this.j.Fb()
    };
    var hd = function(a, b, c) {
        b = b === void 0 ? !1 : b;
        c = c === void 0 ? !1 : c;
        return new bd("", function(d, e) {
            b && (e = d, d = void 0);
            c && (e = d);
            d instanceof bd || (d = void 0);
            e instanceof bd || (e = void 0);
            var f = Ia(this.D),
                g = function(m) {
                    return function(n) {
                        return c ? (m.invoke(f), a.promise) : m.invoke(f, n)
                    }
                },
                k = a.promise.then(d && g(d), e && g(e));
            return new id(k)
        })
    };
    id.prototype.Ha = function() {
        this.C = !0
    };
    id.prototype.xc = function() {
        return this.C
    };

    function J(a, b, c) {
        var d = fd(),
            e = function(g, k) {
                for (var m = g.ka(), n = 0; n < m.length; n++) k[m[n]] = f(g.get(m[n]))
            },
            f = function(g) {
                if (g === null || g === void 0) return g;
                var k = d.get(g);
                if (k) return k;
                if (g instanceof Yc) {
                    var m = [];
                    d.set(g, m);
                    for (var n = g.ka(), p = 0; p < n.length; p++) m[n[p]] = f(g.get(n[p]));
                    return m
                }
                if (g instanceof id) return g.promise;
                if (g instanceof Ma) {
                    var q = {};
                    d.set(g, q);
                    e(g, q);
                    return q
                }
                if (g instanceof bd || g instanceof cd) {
                    var r = function() {
                        for (var v = ya.apply(0, arguments), u = [], w = 0; w < v.length; w++) u[w] = jd(v[w],
                            b, c);
                        var y = new Fa(b ? b.Md() : new Ea);
                        b && (y.j = b.j);
                        return f(g.invoke.apply(g, [y].concat(ua(u))))
                    };
                    d.set(g, r);
                    e(g, r);
                    return r
                }
                var t = !1;
                switch (c) {
                    case 1:
                        t = !0;
                        break;
                    case 2:
                        t = !1;
                        break;
                    case 3:
                        t = !1;
                        break;
                    default:
                }
                if (g instanceof gd && t) return g.getValue();
                switch (typeof g) {
                    case "boolean":
                    case "number":
                    case "string":
                    case "undefined":
                        return g;
                    case "object":
                        if (g === null) return null
                }
            };
        return f(a)
    }

    function jd(a, b, c) {
        var d = fd(),
            e = function(g, k) {
                for (var m in g) g.hasOwnProperty(m) && k.set(m, f(g[m]))
            },
            f = function(g) {
                var k = d.get(g);
                if (k) return k;
                if (Array.isArray(g) || ib(g)) {
                    var m = new Yc;
                    d.set(g, m);
                    for (var n in g) g.hasOwnProperty(n) && m.set(n, f(g[n]));
                    return m
                }
                if (Uc(g)) {
                    var p = new Ma;
                    d.set(g, p);
                    e(g, p);
                    return p
                }
                if (typeof g === "function") {
                    var q = new bd("", function() {
                        for (var y = ya.apply(0, arguments), x = [], A = 0; A < y.length; A++) x[A] = J(this.evaluate(y[A]), b, c);
                        return f((0, this.D.H)(g, g, x))
                    });
                    d.set(g, q);
                    e(g, q);
                    return q
                }
                var u = typeof g;
                if (g === null || u === "string" || u === "number" || u === "boolean") return g;
                var w = !1;
                switch (c) {
                    case 1:
                        w = !0;
                        break;
                    case 2:
                        w = !1;
                        break;
                    default:
                }
                if (g !== void 0 && w) return new gd(g)
            };
        return f(a)
    };
    var kd = {
        supportedMethods: "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),
        concat: function(a) {
            for (var b = [], c = 0; c < this.length(); c++) b.push(this.get(c));
            for (var d = 1; d < arguments.length; d++)
                if (arguments[d] instanceof Yc)
                    for (var e = arguments[d], f = 0; f < e.length(); f++) b.push(e.get(f));
                else b.push(arguments[d]);
            return new Yc(b)
        },
        every: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() &&
                d < c; d++)
                if (this.has(d) && !b.invoke(a, this.get(d), d, this)) return !1;
            return !0
        },
        filter: function(a, b) {
            for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && b.invoke(a, this.get(e), e, this) && d.push(this.get(e));
            return new Yc(d)
        },
        forEach: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++) this.has(d) && b.invoke(a, this.get(d), d, this)
        },
        hasOwnProperty: function(a, b) {
            return this.has(b)
        },
        indexOf: function(a, b, c) {
            var d = this.length(),
                e = c === void 0 ? 0 : Number(c);
            e < 0 && (e = Math.max(d + e, 0));
            for (var f =
                    e; f < d; f++)
                if (this.has(f) && this.get(f) === b) return f;
            return -1
        },
        join: function(a, b) {
            for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
            return c.join(b)
        },
        lastIndexOf: function(a, b, c) {
            var d = this.length(),
                e = d - 1;
            c !== void 0 && (e = c < 0 ? d + c : Math.min(c, e));
            for (var f = e; f >= 0; f--)
                if (this.has(f) && this.get(f) === b) return f;
            return -1
        },
        map: function(a, b) {
            for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && (d[e] = b.invoke(a, this.get(e), e, this));
            return new Yc(d)
        },
        pop: function() {
            return this.pop()
        },
        push: function(a) {
            return this.push.apply(this,
                ua(ya.apply(1, arguments)))
        },
        reduce: function(a, b, c) {
            var d = this.length(),
                e, f = 0;
            if (c !== void 0) e = c;
            else {
                if (d === 0) {
                    if (Pc()) throw new Qc("TypeError: Reduce on List with no elements.");
                    throw Error("TypeError: Reduce on List with no elements.");
                }
                for (var g = 0; g < d; g++)
                    if (this.has(g)) {
                        e = this.get(g);
                        f = g + 1;
                        break
                    }
                if (g === d) {
                    if (Pc()) throw new Qc("TypeError: Reduce on List with no elements.");
                    throw Error("TypeError: Reduce on List with no elements.");
                }
            }
            for (var k = f; k < d; k++) this.has(k) && (e = b.invoke(a, e, this.get(k), k,
                this));
            return e
        },
        reduceRight: function(a, b, c) {
            var d = this.length(),
                e, f = d - 1;
            if (c !== void 0) e = c;
            else {
                if (d === 0) {
                    if (Pc()) throw new Qc("TypeError: ReduceRight on List with no elements.");
                    throw Error("TypeError: ReduceRight on List with no elements.");
                }
                for (var g = 1; g <= d; g++)
                    if (this.has(d - g)) {
                        e = this.get(d - g);
                        f = d - (g + 1);
                        break
                    }
                if (g > d) {
                    if (Pc()) throw new Qc("TypeError: ReduceRight on List with no elements.");
                    throw Error("TypeError: ReduceRight on List with no elements.");
                }
            }
            for (var k = f; k >= 0; k--) this.has(k) && (e = b.invoke(a,
                e, this.get(k), k, this));
            return e
        },
        reverse: function() {
            for (var a = Zc(this), b = a.length - 1, c = 0; b >= 0; b--, c++) a.hasOwnProperty(b) ? this.set(c, a[b]) : this.remove(c);
            return this
        },
        shift: function() {
            return this.shift()
        },
        slice: function(a, b, c) {
            var d = this.length();
            b === void 0 && (b = 0);
            b = b < 0 ? Math.max(d + b, 0) : Math.min(b, d);
            c = c === void 0 ? d : c < 0 ? Math.max(d + c, 0) : Math.min(c, d);
            c = Math.max(b, c);
            for (var e = [], f = b; f < c; f++) e.push(this.get(f));
            return new Yc(e)
        },
        some: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
                if (this.has(d) &&
                    b.invoke(a, this.get(d), d, this)) return !0;
            return !1
        },
        sort: function(a, b) {
            var c = Zc(this);
            b === void 0 ? c.sort() : c.sort(function(e, f) {
                return Number(b.invoke(a, e, f))
            });
            for (var d = 0; d < c.length; d++) c.hasOwnProperty(d) ? this.set(d, c[d]) : this.remove(d);
            return this
        },
        splice: function(a, b, c) {
            return this.splice.apply(this, [b, c].concat(ua(ya.apply(3, arguments))))
        },
        toString: function() {
            return this.toString()
        },
        unshift: function(a) {
            return this.unshift.apply(this, ua(ya.apply(1, arguments)))
        }
    };
    var ld = {
            charAt: 1,
            concat: 1,
            indexOf: 1,
            lastIndexOf: 1,
            match: 1,
            replace: 1,
            search: 1,
            slice: 1,
            split: 1,
            substring: 1,
            toLowerCase: 1,
            toLocaleLowerCase: 1,
            toString: 1,
            toUpperCase: 1,
            toLocaleUpperCase: 1,
            trim: 1
        },
        md = new Aa("break"),
        nd = new Aa("continue");

    function od(a, b) {
        return this.evaluate(a) + this.evaluate(b)
    }

    function pd(a, b) {
        return this.evaluate(a) && this.evaluate(b)
    }

    function qd(a, b, c) {
        var d = this.evaluate(a),
            e = this.evaluate(b),
            f = this.evaluate(c);
        if (!(f instanceof Yc)) throw Error("Error: Non-List argument given to Apply instruction.");
        if (d === null || d === void 0) {
            var g = "TypeError: Can't read property " + e + " of " + d + ".";
            if (Pc()) throw new Qc(g);
            throw Error(g);
        }
        var k = typeof d === "number";
        if (typeof d === "boolean" || k) {
            if (e === "toString") {
                if (k && f.length()) {
                    var m = J(f.get(0));
                    try {
                        return d.toString(m)
                    } catch (D) {}
                }
                return d.toString()
            }
            var n = "TypeError: " + d + "." + e + " is not a function.";
            if (Pc()) throw new Qc(n);
            throw Error(n);
        }
        if (typeof d === "string") {
            if (ld.hasOwnProperty(e)) {
                var p = 2;
                p = 1;
                var q = J(f, void 0, p);
                return jd(d[e].apply(d, q), this.D)
            }
            var r = "TypeError: " + e + " is not a function";
            if (Pc()) throw new Qc(r);
            throw Error(r);
        }
        if (d instanceof Yc) {
            if (d.has(e)) {
                var t = d.get(String(e));
                if (t instanceof bd) {
                    var v = Zc(f);
                    return t.invoke.apply(t, [this.D].concat(ua(v)))
                }
                var u =
                    "TypeError: " + e + " is not a function";
                if (Pc()) throw new Qc(u);
                throw Error(u);
            }
            if (kd.supportedMethods.indexOf(e) >= 0) {
                var w = Zc(f);
                return kd[e].call.apply(kd[e], [d, this.D].concat(ua(w)))
            }
        }
        if (d instanceof bd || d instanceof Ma || d instanceof id) {
            if (d.has(e)) {
                var y = d.get(e);
                if (y instanceof bd) {
                    var x = Zc(f);
                    return y.invoke.apply(y, [this.D].concat(ua(x)))
                }
                var A = "TypeError: " + e + " is not a function";
                if (Pc()) throw new Qc(A);
                throw Error(A);
            }
            if (e === "toString") return d instanceof bd ? d.getName() : d.toString();
            if (e ===
                "hasOwnProperty") return d.has(f.get(0))
        }
        if (d instanceof gd && e === "toString") return d.toString();
        var C = "TypeError: Object has no '" + e + "' property.";
        if (Pc()) throw new Qc(C);
        throw Error(C);
    }

    function rd(a, b) {
        a = this.evaluate(a);
        if (typeof a !== "string") throw Error("Invalid key name given for assignment.");
        var c = this.D;
        if (!c.has(a)) throw Error("Attempting to assign to undefined value " + b);
        var d = this.evaluate(b);
        c.set(a, d);
        return d
    }

    function sd() {
        var a = ya.apply(0, arguments),
            b = Ia(this.D),
            c = Ja(b, a);
        if (c instanceof Aa) return c
    }

    function td() {
        return md
    }

    function ud(a) {
        for (var b = this.evaluate(a), c = 0; c < b.length; c++) {
            var d = this.evaluate(b[c]);
            if (d instanceof Aa) return d
        }
    }

    function vd() {
        for (var a = this.D, b = 0; b < arguments.length - 1; b += 2) {
            var c = arguments[b];
            if (typeof c === "string") {
                var d = this.evaluate(arguments[b + 1]);
                Ha(a, c, d, !0)
            }
        }
    }

    function wd() {
        return nd
    }

    function xd(a, b) {
        return new Aa(a, this.evaluate(b))
    }

    function yd(a, b) {
        for (var c = ya.apply(2, arguments), d = new Yc, e = this.evaluate(b), f = 0; f < e.length; f++) d.push(e[f]);
        var g = [51, a, d].concat(ua(c));
        this.D.add(a, this.evaluate(g))
    }

    function zd(a, b) {
        return this.evaluate(a) / this.evaluate(b)
    }

    function Ad(a, b) {
        var c = this.evaluate(a),
            d = this.evaluate(b),
            e = c instanceof gd,
            f = d instanceof gd;
        return e || f ? e && f ? c.getValue() === d.getValue() : !1 : c == d
    }

    function Bd() {
        for (var a, b = 0; b < arguments.length; b++) a = this.evaluate(arguments[b]);
        return a
    }

    function Cd(a, b, c, d) {
        for (var e = 0; e < b(); e++) {
            var f = a(c(e)),
                g = Ja(f, d);
            if (g instanceof Aa) {
                if (g.type === "break") break;
                if (g.type === "return") return g
            }
        }
    }

    function Dd(a, b, c) {
        if (typeof b === "string") return Cd(a, function() {
            return b.length
        }, function(f) {
            return f
        }, c);
        if (b instanceof Ma || b instanceof id || b instanceof Yc || b instanceof bd) {
            var d = b.ka(),
                e = d.length;
            return Cd(a, function() {
                return e
            }, function(f) {
                return d[f]
            }, c)
        }
    }

    function Ed(a, b, c) {
        var d = this.evaluate(a),
            e = this.evaluate(b),
            f = this.evaluate(c),
            g = this.D;
        return Dd(function(k) {
            g.set(d, k);
            return g
        }, e, f)
    }

    function Fd(a, b, c) {
        var d = this.evaluate(a),
            e = this.evaluate(b),
            f = this.evaluate(c),
            g = this.D;
        return Dd(function(k) {
            var m = Ia(g);
            Ha(m, d, k, !0);
            return m
        }, e, f)
    }

    function Gd(a, b, c) {
        var d = this.evaluate(a),
            e = this.evaluate(b),
            f = this.evaluate(c),
            g = this.D;
        return Dd(function(k) {
            var m = Ia(g);
            m.add(d, k);
            return m
        }, e, f)
    }

    function Hd(a, b, c) {
        var d = this.evaluate(a),
            e = this.evaluate(b),
            f = this.evaluate(c),
            g = this.D;
        return Id(function(k) {
            g.set(d, k);
            return g
        }, e, f)
    }

    function Jd(a, b, c) {
        var d = this.evaluate(a),
            e = this.evaluate(b),
            f = this.evaluate(c),
            g = this.D;
        return Id(function(k) {
            var m = Ia(g);
            Ha(m, d, k, !0);
            return m
        }, e, f)
    }

    function Kd(a, b, c) {
        var d = this.evaluate(a),
            e = this.evaluate(b),
            f = this.evaluate(c),
            g = this.D;
        return Id(function(k) {
            var m = Ia(g);
            m.add(d, k);
            return m
        }, e, f)
    }

    function Id(a, b, c) {
        if (typeof b === "string") return Cd(a, function() {
            return b.length
        }, function(d) {
            return b[d]
        }, c);
        if (b instanceof Yc) return Cd(a, function() {
            return b.length()
        }, function(d) {
            return b.get(d)
        }, c);
        if (Pc()) throw new Qc("The value is not iterable.");
        throw new TypeError("The value is not iterable.");
    }

    function Ld(a, b, c, d) {
        function e(q, r) {
            for (var t = 0; t < f.length(); t++) {
                var v = f.get(t);
                r.add(v, q.get(v))
            }
        }
        var f = this.evaluate(a);
        if (!(f instanceof Yc)) throw Error("TypeError: Non-List argument given to ForLet instruction.");
        var g = this.D,
            k = this.evaluate(d),
            m = Ia(g);
        for (e(g, m); Ka(m, b);) {
            var n = Ja(m, k);
            if (n instanceof Aa) {
                if (n.type === "break") break;
                if (n.type === "return") return n
            }
            var p = Ia(g);
            e(m, p);
            Ka(p, c);
            m = p
        }
    }

    function Md(a, b) {
        var c = ya.apply(2, arguments),
            d = this.D,
            e = this.evaluate(b);
        if (!(e instanceof Yc)) throw Error("Error: non-List value given for Fn argument names.");
        return new bd(a, function() {
            return function() {
                var f = ya.apply(0, arguments),
                    g = Ia(d);
                g.j === void 0 && (g.j = this.D.j);
                for (var k = [], m = 0; m < f.length; m++) {
                    var n = this.evaluate(f[m]);
                    k[m] = n
                }
                for (var p = e.get("length"), q = 0; q < p; q++) q < k.length ? g.add(e.get(q), k[q]) : g.add(e.get(q), void 0);
                g.add("arguments", new Yc(k));
                var r = Ja(g, c);
                if (r instanceof Aa) return r.type ===
                    "return" ? r.data : r
            }
        }())
    }

    function Nd(a) {
        var b = this.evaluate(a),
            c = this.D;
        if (Od && !c.has(b)) throw new ReferenceError(b + " is not defined.");
        return c.get(b)
    }

    function Pd(a, b) {
        var c, d = this.evaluate(a),
            e = this.evaluate(b);
        if (d === void 0 || d === null) {
            var f = "TypeError: Cannot read properties of " + d + " (reading '" + e + "')";
            if (Pc()) throw new Qc(f);
            throw Error(f);
        }
        if (d instanceof Ma || d instanceof id || d instanceof Yc || d instanceof bd) c = d.get(e);
        else if (typeof d === "string") e === "length" ? c = d.length : Xc(e) && (c = d[e]);
        else if (d instanceof gd) return;
        return c
    }

    function Qd(a, b) {
        return this.evaluate(a) > this.evaluate(b)
    }

    function Rd(a, b) {
        return this.evaluate(a) >= this.evaluate(b)
    }

    function Sd(a, b) {
        var c = this.evaluate(a),
            d = this.evaluate(b);
        c instanceof gd && (c = c.getValue());
        d instanceof gd && (d = d.getValue());
        return c === d
    }

    function Td(a, b) {
        return !Sd.call(this, a, b)
    }

    function Ud(a, b, c) {
        var d = [];
        this.evaluate(a) ? d = this.evaluate(b) : c && (d = this.evaluate(c));
        var e = Ja(this.D, d);
        if (e instanceof Aa) return e
    }
    var Od = !1;

    function Vd(a, b) {
        return this.evaluate(a) < this.evaluate(b)
    }

    function Wd(a, b) {
        return this.evaluate(a) <= this.evaluate(b)
    }

    function Xd() {
        for (var a = new Yc, b = 0; b < arguments.length; b++) {
            var c = this.evaluate(arguments[b]);
            a.push(c)
        }
        return a
    }

    function Yd() {
        for (var a = new Ma, b = 0; b < arguments.length - 1; b += 2) {
            var c = String(this.evaluate(arguments[b])),
                d = this.evaluate(arguments[b + 1]);
            a.set(c, d)
        }
        return a
    }

    function Zd(a, b) {
        return this.evaluate(a) % this.evaluate(b)
    }

    function $d(a, b) {
        return this.evaluate(a) * this.evaluate(b)
    }

    function ae(a) {
        return -this.evaluate(a)
    }

    function be(a) {
        return !this.evaluate(a)
    }

    function ce(a, b) {
        return !Ad.call(this, a, b)
    }

    function de() {
        return null
    }

    function ee(a, b) {
        return this.evaluate(a) || this.evaluate(b)
    }

    function fe(a, b) {
        var c = this.evaluate(a);
        this.evaluate(b);
        return c
    }

    function ge(a) {
        return this.evaluate(a)
    }

    function he() {
        return ya.apply(0, arguments)
    }

    function ie(a) {
        return new Aa("return", this.evaluate(a))
    }

    function je(a, b, c) {
        var d = this.evaluate(a),
            e = this.evaluate(b),
            f = this.evaluate(c);
        if (d === null || d === void 0) {
            var g = "TypeError: Can't set property " + e + " of " + d + ".";
            if (Pc()) throw new Qc(g);
            throw Error(g);
        }(d instanceof bd || d instanceof Yc || d instanceof Ma) && d.set(String(e), f);
        return f
    }

    function ke(a, b) {
        return this.evaluate(a) - this.evaluate(b)
    }

    function le(a, b, c) {
        var d = this.evaluate(a),
            e = this.evaluate(b),
            f = this.evaluate(c);
        if (!Array.isArray(e) || !Array.isArray(f)) throw Error("Error: Malformed switch instruction.");
        for (var g, k = !1, m = 0; m < e.length; m++)
            if (k || d === this.evaluate(e[m]))
                if (g = this.evaluate(f[m]), g instanceof Aa) {
                    var n = g.type;
                    if (n === "break") return;
                    if (n === "return" || n === "continue") return g
                } else k = !0;
        if (f.length === e.length + 1 && (g = this.evaluate(f[f.length - 1]), g instanceof Aa && (g.type === "return" || g.type === "continue"))) return g
    }

    function me(a, b, c) {
        return this.evaluate(a) ? this.evaluate(b) : this.evaluate(c)
    }

    function ne(a) {
        var b = this.evaluate(a);
        return b instanceof bd ? "function" : typeof b
    }

    function oe() {
        for (var a = this.D, b = 0; b < arguments.length; b++) {
            var c = arguments[b];
            typeof c !== "string" || a.add(c, void 0)
        }
    }

    function pe(a, b, c, d) {
        var e = this.evaluate(d);
        if (this.evaluate(c)) {
            var f = Ja(this.D, e);
            if (f instanceof Aa) {
                if (f.type === "break") return;
                if (f.type === "return") return f
            }
        }
        for (; this.evaluate(a);) {
            var g = Ja(this.D, e);
            if (g instanceof Aa) {
                if (g.type === "break") break;
                if (g.type === "return") return g
            }
            this.evaluate(b)
        }
    }

    function qe(a) {
        return ~Number(this.evaluate(a))
    }

    function re(a, b) {
        return Number(this.evaluate(a)) << Number(this.evaluate(b))
    }

    function se(a, b) {
        return Number(this.evaluate(a)) >> Number(this.evaluate(b))
    }

    function te(a, b) {
        return Number(this.evaluate(a)) >>> Number(this.evaluate(b))
    }

    function ve(a, b) {
        return Number(this.evaluate(a)) & Number(this.evaluate(b))
    }

    function we(a, b) {
        return Number(this.evaluate(a)) ^ Number(this.evaluate(b))
    }

    function xe(a, b) {
        return Number(this.evaluate(a)) | Number(this.evaluate(b))
    }

    function ye() {}

    function ze(a, b, c, d, e) {
        var f = !0;
        try {
            var g = this.evaluate(c);
            if (g instanceof Aa) return g
        } catch (r) {
            if (!(r instanceof Qc && a)) throw f = r instanceof Qc, r;
            var k = Ia(this.D),
                m = new gd(r);
            k.add(b, m);
            var n = this.evaluate(d),
                p = Ja(k, n);
            if (p instanceof Aa) return p
        } finally {
            if (f && e !== void 0) {
                var q = this.evaluate(e);
                if (q instanceof Aa) return q
            }
        }
    };
    var Be = function() {
        this.j = new La;
        Ae(this)
    };
    Be.prototype.execute = function(a) {
        return this.j.vi(a)
    };
    var Ae = function(a) {
        var b = function(c, d) {
            var e = new cd(String(c), d);
            e.Ha();
            a.j.j.set(String(c), e)
        };
        b("map", Yd);
        b("and", Jc);
        b("contains", Mc);
        b("equals", Kc);
        b("or", Lc);
        b("startsWith", Nc);
        b("variable", Oc)
    };
    var De = function() {
        this.C = !1;
        this.j = new La;
        Ce(this);
        this.C = !0
    };
    De.prototype.execute = function(a) {
        return Ee(this.j.vi(a))
    };
    var Fe = function(a, b, c) {
        return Ee(a.j.El(b, c))
    };
    De.prototype.Ha = function() {
        this.j.Ha()
    };
    var Ce = function(a) {
        var b = function(c, d) {
            var e = String(c),
                f = new cd(e, d);
            f.Ha();
            a.j.j.set(e, f)
        };
        b(0, od);
        b(1, pd);
        b(2, qd);
        b(3, rd);
        b(56, ve);
        b(57, re);
        b(58, qe);
        b(59, xe);
        b(60, se);
        b(61, te);
        b(62, we);
        b(53, sd);
        b(4, td);
        b(5, ud);
        b(52, vd);
        b(6, wd);
        b(49, xd);
        b(7, Xd);
        b(8, Yd);
        b(9, ud);
        b(50, yd);
        b(10, zd);
        b(12, Ad);
        b(13, Bd);
        b(51, Md);
        b(47, Ed);
        b(54, Fd);
        b(55, Gd);
        b(63, Ld);
        b(64, Hd);
        b(65, Jd);
        b(66, Kd);
        b(15, Nd);
        b(16, Pd);
        b(17, Pd);
        b(18, Qd);
        b(19, Rd);
        b(20, Sd);
        b(21, Td);
        b(22, Ud);
        b(23, Vd);
        b(24, Wd);
        b(25, Zd);
        b(26, $d);
        b(27, ae);
        b(28, be);
        b(29,
            ce);
        b(45, de);
        b(30, ee);
        b(32, fe);
        b(33, fe);
        b(34, ge);
        b(35, ge);
        b(46, he);
        b(36, ie);
        b(43, je);
        b(37, ke);
        b(38, le);
        b(39, me);
        b(67, ze);
        b(40, ne);
        b(44, ye);
        b(41, oe);
        b(42, pe)
    };
    De.prototype.Md = function() {
        return this.j.Md()
    };

    function Ee(a) {
        if (a instanceof Aa || a instanceof bd || a instanceof Yc || a instanceof Ma || a instanceof id || a instanceof gd || a === null || a === void 0 || typeof a === "string" || typeof a === "number" || typeof a === "boolean") return a
    };
    var Ge = function(a) {
        this.message = a
    };

    function He(a) {
        var b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [a];
        return b === void 0 ? new Ge("Value " + a + " can not be encoded in web-safe base64 dictionary.") : b
    };

    function Ie(a) {
        switch (a) {
            case 1:
                return "1";
            case 2:
            case 4:
                return "0";
            default:
                return "-"
        }
    };
    var Je = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;

    function Ke(a, b) {
        for (var c = "", d = !0; a > 7;) {
            var e = a & 31;
            a >>= 5;
            d ? d = !1 : e |= 32;
            c = "" + He(e) + c
        }
        a <<= 2;
        d || (a |= 32);
        return c = "" + He(a | b) + c
    };
    var Le = function() {
        function a(b) {
            return {
                toString: function() {
                    return b
                }
            }
        }
        return {
            Yk: a("consent"),
            Gi: a("convert_case_to"),
            Hi: a("convert_false_to"),
            Ii: a("convert_null_to"),
            Ji: a("convert_true_to"),
            Ki: a("convert_undefined_to"),
            Nn: a("debug_mode_metadata"),
            ra: a("function"),
            vh: a("instance_name"),
            Hl: a("live_only"),
            Il: a("malware_disabled"),
            METADATA: a("metadata"),
            Ll: a("original_activity_id"),
            ao: a("original_vendor_template_id"),
            Zn: a("once_on_load"),
            Kl: a("once_per_event"),
            Tj: a("once_per_load"),
            co: a("priority_override"),
            eo: a("respected_consent_types"),
            dk: a("setup_tags"),
            Me: a("tag_id"),
            ik: a("teardown_tags")
        }
    }();
    var gf;
    var hf = [],
        jf = [],
        kf = [],
        lf = [],
        mf = [],
        nf = {},
        of , pf;

    function qf(a) {
        pf = pf || a
    }

    function rf() {
        for (var a = data.resource || {}, b = a.macros || [], c = 0; c < b.length; c++) hf.push(b[c]);
        for (var d = a.tags || [], e = 0; e < d.length; e++) lf.push(d[e]);
        for (var f = a.predicates || [], g = 0; g < f.length; g++) kf.push(f[g]);
        for (var k = a.rules || [], m = 0; m < k.length; m++) {
            for (var n = k[m], p = {}, q = 0; q < n.length; q++) {
                var r = n[q][0];
                p[r] = Array.prototype.slice.call(n[q], 1);
                r !== "if" && r !== "unless" || sf(p[r])
            }
            jf.push(p)
        }
    }

    function sf(a) {}
    var tf, uf = [],
        vf = [];

    function wf(a, b) {
        var c = {};
        c[Le.ra] = "__" + a;
        for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
        return c
    }

    function xf(a, b, c) {
        try {
            return of(yf(a, b, c))
        } catch (d) {
            JSON.stringify(a)
        }
        return 2
    }

    function zf(a) {
        var b = a[Le.ra];
        if (!b) throw Error("Error: No function name given for function call.");
        return !!nf[b]
    }
    var yf = function(a, b, c) {
            c = c || [];
            var d = {},
                e;
            for (e in a) a.hasOwnProperty(e) && (d[e] = Af(a[e], b, c));
            return d
        },
        Af = function(a, b, c) {
            if (Array.isArray(a)) {
                var d;
                switch (a[0]) {
                    case "function_id":
                        return a[1];
                    case "list":
                        d = [];
                        for (var e = 1; e < a.length; e++) d.push(Af(a[e], b, c));
                        return d;
                    case "macro":
                        var f = a[1];
                        if (c[f]) return;
                        var g = hf[f];
                        if (!g || b.isBlocked(g)) return;
                        c[f] = !0;
                        var k = String(g[Le.vh]);
                        try {
                            var m = yf(g, b, c);
                            m.vtp_gtmEventId = b.id;
                            b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
                            d = Bf(m, {
                                event: b,
                                index: f,
                                type: 2,
                                name: k
                            });
                            tf && (d = tf.am(d, m))
                        } catch (x) {
                            b.logMacroError && b.logMacroError(x, Number(f), k), d = !1
                        }
                        c[f] = !1;
                        return d;
                    case "map":
                        d = {};
                        for (var n = 1; n < a.length; n += 2) d[Af(a[n], b, c)] = Af(a[n + 1], b, c);
                        return d;
                    case "template":
                        d = [];
                        for (var p = !1, q = 1; q < a.length; q++) {
                            var r = Af(a[q], b, c);
                            pf && (p = p || pf.Rm(r));
                            d.push(r)
                        }
                        return pf && p ? pf.fm(d) : d.join("");
                    case "escape":
                        d = Af(a[1], b, c);
                        if (pf && Array.isArray(a[1]) && a[1][0] === "macro" && pf.Sm(a)) return pf.nn(d);
                        d = String(d);
                        for (var t = 2; t < a.length; t++) Se[a[t]] && (d = Se[a[t]](d));
                        return d;
                    case "tag":
                        var v = a[1];
                        if (!lf[v]) throw Error("Unable to resolve tag reference " + v + ".");
                        return {
                            qk: a[2],
                            index: v
                        };
                    case "zb":
                        var u = {
                            arg0: a[2],
                            arg1: a[3],
                            ignore_case: a[5]
                        };
                        u[Le.ra] = a[1];
                        var w = xf(u, b, c),
                            y = !!a[4];
                        return y || w !== 2 ? y !== (w === 1) : null;
                    default:
                        throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
                }
            }
            return a
        },
        Bf = function(a, b) {
            var c = a[Le.ra],
                d = b && b.event;
            if (!c) throw Error("Error: No function name given for function call.");
            var e = nf[c],
                f = b && b.type === 2 && (d == null ? void 0 : d.reportMacroDiscrepancy) &&
                e && uf.indexOf(c) !== -1,
                g = {},
                k = {},
                m;
            for (m in a) a.hasOwnProperty(m) && tb(m, "vtp_") && (e && (g[m] = a[m]), !e || f) && (k[m.substring(4)] = a[m]);
            e && d && d.cachedModelValues && (g.vtp_gtmCachedValues = d.cachedModelValues);
            if (b) {
                if (b.name == null) {
                    var n;
                    a: {
                        var p = b.type,
                            q = b.index;
                        if (q == null) n = "";
                        else {
                            var r;
                            switch (p) {
                                case 2:
                                    r = hf[q];
                                    break;
                                case 1:
                                    r = lf[q];
                                    break;
                                default:
                                    n = "";
                                    break a
                            }
                            var t = r && r[Le.vh];
                            n = t ? String(t) : ""
                        }
                    }
                    b.name = n
                }
                e && (g.vtp_gtmEntityIndex = b.index, g.vtp_gtmEntityName = b.name)
            }
            var v, u, w;
            if (f && vf.indexOf(c) === -1) {
                vf.push(c);
                var y = ob();
                v = e(g);
                var x = ob() - y,
                    A = ob();
                u = gf(c, k, b);
                w = x - (ob() - A)
            } else if (e && (v = e(g)), !e || f) u = gf(c, k, b);
            f && d && (d.reportMacroDiscrepancy(d.id, c, void 0, !0), Wc(v) ? (Array.isArray(v) ? Array.isArray(u) : Uc(v) ? Uc(u) : typeof v === "function" ? typeof u === "function" : v === u) || d.reportMacroDiscrepancy(d.id, c) : v !== u && d.reportMacroDiscrepancy(d.id, c), w !== void 0 && d.reportMacroDiscrepancy(d.id, c, w));
            return e ? v : u
        };
    var Cf = function(a, b, c) {
        var d;
        d = Error.call(this, c);
        this.message = d.message;
        "stack" in d && (this.stack = d.stack);
        this.permissionId = a;
        this.parameters = b;
        this.name = "PermissionError"
    };
    sa(Cf, Error);
    Cf.prototype.getMessage = function() {
        return this.message
    };

    function Df(a, b) {
        if (Array.isArray(a)) {
            Object.defineProperty(a, "context", {
                value: {
                    line: b[0]
                }
            });
            for (var c = 1; c < a.length; c++) Df(a[c], b[c])
        }
    };
    var Ef = function(a, b) {
        var c;
        c = Error.call(this, "Wrapped error for Dust debugging. Original error message: " + a.message);
        this.message = c.message;
        "stack" in c && (this.stack = c.stack);
        this.hn = a;
        this.j = [];
        this.C = b
    };
    sa(Ef, Error);

    function Ff() {
        return function(a, b) {
            a instanceof Ef || (a = new Ef(a, Gf));
            b && a instanceof Ef && a.j.push(b);
            throw a;
        }
    }

    function Gf(a) {
        if (!a.length) return a;
        a.push({
            id: "main",
            line: 0
        });
        for (var b = a.length - 1; b > 0; b--) ab(a[b].id) && a.splice(b++, 1);
        for (var c = a.length - 1; c > 0; c--) a[c].line = a[c - 1].line;
        a.splice(0, 1);
        return a
    };

    function Hf(a) {
        function b(r) {
            for (var t = 0; t < r.length; t++) d[r[t]] = !0
        }
        for (var c = [], d = [], e = If(a), f = 0; f < jf.length; f++) {
            var g = jf[f],
                k = Jf(g, e);
            if (k) {
                for (var m = g.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
                b(g.block || [])
            } else k === null && b(g.block || []);
        }
        for (var p = [], q = 0; q < lf.length; q++) c[q] && !d[q] && (p[q] = !0);
        return p
    }

    function Jf(a, b) {
        for (var c = a["if"] || [], d = 0; d < c.length; d++) {
            var e = b(c[d]);
            if (e === 0) return !1;
            if (e === 2) return null
        }
        for (var f = a.unless || [], g = 0; g < f.length; g++) {
            var k = b(f[g]);
            if (k === 2) return null;
            if (k === 1) return !1
        }
        return !0
    }

    function If(a) {
        var b = [];
        return function(c) {
            b[c] === void 0 && (b[c] = xf(kf[c], a));
            return b[c]
        }
    };

    function Kf(a, b) {
        b[Le.Gi] && typeof a === "string" && (a = b[Le.Gi] === 1 ? a.toLowerCase() : a.toUpperCase());
        b.hasOwnProperty(Le.Ii) && a === null && (a = b[Le.Ii]);
        b.hasOwnProperty(Le.Ki) && a === void 0 && (a = b[Le.Ki]);
        b.hasOwnProperty(Le.Ji) && a === !0 && (a = b[Le.Ji]);
        b.hasOwnProperty(Le.Hi) && a === !1 && (a = b[Le.Hi]);
        return a
    };
    var Lf = function() {
            this.j = {}
        },
        Nf = function(a, b) {
            var c = Mf.j,
                d;
            (d = c.j)[a] != null || (d[a] = []);
            c.j[a].push(function() {
                return b.apply(null, ua(ya.apply(0, arguments)))
            })
        };

    function Of(a, b, c, d) {
        if (a)
            for (var e = 0; e < a.length; e++) {
                var f = void 0,
                    g = "A policy function denied the permission request";
                try {
                    f = a[e](b, c, d), g += "."
                } catch (k) {
                    g = typeof k === "string" ? g + (": " + k) : k instanceof Error ? g + (": " + k.message) : g + "."
                }
                if (!f) throw new Cf(c, d, g);
            }
    }

    function Pf(a, b, c) {
        return function(d) {
            if (d) {
                var e = a.j[d],
                    f = a.j.all;
                if (e || f) {
                    var g = c.apply(void 0, [d].concat(ua(ya.apply(1, arguments))));
                    Of(e, b, d, g);
                    Of(f, b, d, g)
                }
            }
        }
    };
    var Tf = function() {
            var a = data.permissions || {},
                b = Qf.ctid,
                c = this;
            this.C = {};
            this.j = new Lf;
            var d = {},
                e = {},
                f = Pf(this.j, b, function(g) {
                    return g && d[g] ? d[g].apply(void 0, [g].concat(ua(ya.apply(1, arguments)))) : {}
                });
            hb(a, function(g, k) {
                function m(p) {
                    var q = ya.apply(1, arguments);
                    if (!n[p]) throw Rf(p, {}, "The requested additional permission " + p + " is not configured.");
                    f.apply(null, [p].concat(ua(q)))
                }
                var n = {};
                hb(k, function(p, q) {
                    var r = Sf(p, q);
                    n[p] = r.assert;
                    d[p] || (d[p] = r.M);
                    r.kk && !e[p] && (e[p] = r.kk)
                });
                c.C[g] = function(p,
                    q) {
                    var r = n[p];
                    if (!r) throw Rf(p, {}, "The requested permission " + p + " is not configured.");
                    var t = Array.prototype.slice.call(arguments, 0);
                    r.apply(void 0, t);
                    f.apply(void 0, t);
                    var v = e[p];
                    v && v.apply(null, [m].concat(ua(t.slice(1))))
                }
            })
        },
        Uf = function(a) {
            return Mf.C[a] || function() {}
        };

    function Sf(a, b) {
        var c = wf(a, b);
        c.vtp_permissionName = a;
        c.vtp_createPermissionError = Rf;
        try {
            return Bf(c)
        } catch (d) {
            return {
                assert: function(e) {
                    throw new Cf(e, {}, "Permission " + e + " is unknown.");
                },
                M: function() {
                    throw new Cf(a, {}, "Permission " + a + " is unknown.");
                }
            }
        }
    }

    function Rf(a, b, c) {
        return new Cf(a, b, c)
    };
    var Vf = !1;
    var Wf = {};
    Wf.Qk = kb('');
    Wf.jm = kb('');
    var bg = {},
        cg = (bg.uaa = !0, bg.uab = !0, bg.uafvl = !0, bg.uamb = !0, bg.uam = !0, bg.uap = !0, bg.uapv = !0, bg.uaw = !0, bg);
    var kg = function(a, b) {
            for (var c = 0; c < b.length; c++) {
                var d = a,
                    e = b[c];
                if (!ig.exec(e)) throw Error("Invalid key wildcard");
                var f = e.indexOf(".*"),
                    g = f !== -1 && f === e.length - 2,
                    k = g ? e.slice(0, e.length - 2) : e,
                    m;
                a: if (d.length === 0) m = !1;
                    else {
                        for (var n = d.split("."), p = 0; p < n.length; p++)
                            if (!jg.exec(n[p])) {
                                m = !1;
                                break a
                            }
                        m = !0
                    }
                if (!m || k.length > d.length || !g && d.length !== e.length ? 0 : g ? tb(d, k) && (d === k || d.charAt(k.length) === ".") : d === k) return !0
            }
            return !1
        },
        jg = /^[a-z$_][\w-$]*$/i,
        ig = /^(?:[a-z_$][a-z-_$0-9]*\.)*[a-z_$][a-z-_$0-9]*(?:\.\*)?$/i;
    var lg = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];

    function mg(a, b) {
        var c = String(a),
            d = String(b),
            e = c.length - d.length;
        return e >= 0 && c.indexOf(d, e) === e
    }
    var ng = new fb;

    function og(a, b, c) {
        var d = c ? "i" : void 0;
        try {
            var e = String(b) + String(d),
                f = ng.get(e);
            f || (f = new RegExp(b, d), ng.set(e, f));
            return f.test(a)
        } catch (g) {
            return !1
        }
    }

    function pg(a, b) {
        return String(a).indexOf(String(b)) >= 0
    }

    function qg(a, b) {
        return String(a) === String(b)
    }

    function rg(a, b) {
        return Number(a) >= Number(b)
    }

    function sg(a, b) {
        return Number(a) <= Number(b)
    }

    function tg(a, b) {
        return Number(a) > Number(b)
    }

    function ug(a, b) {
        return Number(a) < Number(b)
    }

    function vg(a, b) {
        return tb(String(a), String(b))
    };
    var Cg = /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|PixieMap|List|OpaqueValue)$/i,
        Dg = {
            Fn: "function",
            PixieMap: "Object",
            List: "Array"
        };

    function Eg(a, b) {
        for (var c = ["input:!*"], d = 0; d < c.length; d++) {
            var e = Cg.exec(c[d]);
            if (!e) throw Error("Internal Error in " + a);
            var f = e[1],
                g = e[2] === "!",
                k = e[3],
                m = b[d];
            if (m == null) {
                if (g) throw Error("Error in " + a + ". Required argument " + f + " not supplied.");
            } else if (k !== "*") {
                var n = typeof m;
                m instanceof bd ? n = "Fn" : m instanceof Yc ? n = "List" : m instanceof Ma ? n = "PixieMap" : m instanceof id ? n = "PixiePromise" : m instanceof gd && (n = "OpaqueValue");
                if (n !== k) throw Error("Error in " + a + ". Argument " + f + " has type " + ((Dg[n] || n) + ", which does not match required type ") +
                    ((Dg[k] || k) + "."));
            }
        }
    }

    function L(a, b, c) {
        for (var d = [], e = l(c), f = e.next(); !f.done; f = e.next()) {
            var g = f.value;
            g instanceof bd ? d.push("function") : g instanceof Yc ? d.push("Array") : g instanceof Ma ? d.push("Object") : g instanceof id ? d.push("Promise") : g instanceof gd ? d.push("OpaqueValue") : d.push(typeof g)
        }
        return Error("Argument error in " + a + ". Expected argument types [" + (b.join(",") + "], but received [") + (d.join(",") + "]."))
    }

    function Fg(a) {
        return a instanceof Ma
    }

    function Gg(a) {
        return Fg(a) || a === null || Hg(a)
    }

    function Ig(a) {
        return a instanceof bd
    }

    function Jg(a) {
        return Ig(a) || a === null || Hg(a)
    }

    function Kg(a) {
        return a instanceof Yc
    }

    function Lg(a) {
        return a instanceof gd
    }

    function M(a) {
        return typeof a === "string"
    }

    function Mg(a) {
        return M(a) || a === null || Hg(a)
    }

    function Ng(a) {
        return typeof a === "boolean"
    }

    function Og(a) {
        return Ng(a) || a === null || Hg(a)
    }

    function Pg(a) {
        return typeof a === "number"
    }

    function Hg(a) {
        return a === void 0
    };

    function Qg(a) {
        return "" + a
    }

    function Rg(a, b) {
        var c = [];
        return c
    };

    function Sg(a, b) {
        var c = new bd(a, function() {
            for (var d = Array.prototype.slice.call(arguments, 0), e = 0; e < d.length; e++) d[e] = this.evaluate(d[e]);
            try {
                return b.apply(this, d)
            } catch (g) {
                if (Pc()) throw new Qc(g.message);
                throw g;
            }
        });
        c.Ha();
        return c
    }

    function Tg(a, b) {
        var c = new Ma,
            d;
        for (d in b)
            if (b.hasOwnProperty(d)) {
                var e = b[d];
                $a(e) ? c.set(d, Sg(a + "_" + d, e)) : Uc(e) ? c.set(d, Tg(a + "_" + d, e)) : (ab(e) || z(e) || typeof e === "boolean") && c.set(d, e)
            }
        c.Ha();
        return c
    };

    function Ug(a, b) {
        if (!M(a)) throw L(this.getName(), ["string"], arguments);
        if (!Mg(b)) throw L(this.getName(), ["string", "undefined"], arguments);
        var c = {},
            d = new Ma;
        return d = Tg("AssertApiSubject",
            c)
    };

    function Vg(a, b) {
        if (!Mg(b)) throw L(this.getName(), ["string", "undefined"], arguments);
        if (a instanceof id) throw Error("Argument actual cannot have type Promise. Assertions on asynchronous code aren't supported.");
        var c = {},
            d = new Ma;
        return d = Tg("AssertThatSubject", c)
    };

    function Wg(a) {
        return function() {
            for (var b = ya.apply(0, arguments), c = [], d = this.D, e = 0; e < b.length; ++e) c.push(J(b[e], d));
            return jd(a.apply(null, c))
        }
    }

    function Xg() {
        for (var a = Math, b = Yg, c = {}, d = 0; d < b.length; d++) {
            var e = b[d];
            a.hasOwnProperty(e) && (c[e] = Wg(a[e].bind(a)))
        }
        return c
    };

    function Zg(a) {
        var b;
        return b
    };

    function $g(a) {
        var b;
        return b
    };

    function ah(a) {
        try {
            return encodeURI(a)
        } catch (b) {}
    };

    function bh(a) {
        try {
            return encodeURIComponent(String(a))
        } catch (b) {}
    };

    function gh(a) {
        if (!Mg(a)) throw L(this.getName(), ["string|undefined"], arguments);
    };

    function hh(a, b) {
        if (!Pg(a) || !Pg(b)) throw L(this.getName(), ["number", "number"], arguments);
        return db(a, b)
    };

    function ih() {
        return (new Date).getTime()
    };

    function jh(a) {
        if (a === null) return "null";
        if (a instanceof Yc) return "array";
        if (a instanceof bd) return "function";
        if (a instanceof gd) {
            var b = a.getValue();
            if ((b == null ? void 0 : b.constructor) === void 0 || b.constructor.name === void 0) {
                var c = String(b);
                return c.substring(8, c.length - 1)
            }
            return String(b.constructor.name)
        }
        return typeof a
    };

    function kh(a) {
        function b(c) {
            return function(d) {
                try {
                    return c(d)
                } catch (e) {
                    (Vf || Wf.Qk) && a.call(this, e.message)
                }
            }
        }
        return {
            parse: b(function(c) {
                return jd(JSON.parse(c))
            }),
            stringify: b(function(c) {
                return JSON.stringify(J(c))
            }),
            publicName: "JSON"
        }
    };

    function lh(a) {
        return jb(J(a, this.D))
    };

    function mh(a) {
        return Number(J(a, this.D))
    };

    function nh(a) {
        return a === null ? "null" : a === void 0 ? "undefined" : a.toString()
    };

    function oh(a, b, c) {
        var d = null,
            e = !1;
        if (!Kg(a) || !M(b) || !M(c)) throw L(this.getName(), ["Array", "string", "string"], arguments);
        d = new Ma;
        for (var f = 0; f < a.length(); f++) {
            var g = a.get(f);
            g instanceof Ma && g.has(b) && g.has(c) && (d.set(g.get(b), g.get(c)), e = !0)
        }
        return e ? d : null
    };
    var Yg = "floor ceil round max min abs pow sqrt".split(" ");

    function ph() {
        var a = {};
        return {
            wm: function(b) {
                return a.hasOwnProperty(b) ? a[b] : void 0
            },
            Mk: function(b, c) {
                a[b] = c
            },
            reset: function() {
                a = {}
            }
        }
    }

    function qh(a, b) {
        return function() {
            return bd.prototype.invoke.apply(a, [b].concat(ua(ya.apply(0, arguments))))
        }
    }

    function rh(a, b) {
        if (!M(a)) throw L(this.getName(), ["string", "any"], arguments);
    }

    function sh(a, b) {
        if (!M(a) || !Fg(b)) throw L(this.getName(), ["string", "PixieMap"], arguments);
    };
    var th = {};
    var uh = function(a) {
        var b = new Ma;
        if (a instanceof Yc)
            for (var c = a.ka(), d = 0; d < c.length; d++) {
                var e = c[d];
                a.has(e) && b.set(e, a.get(e))
            } else if (a instanceof bd)
                for (var f = a.ka(), g = 0; g < f.length; g++) {
                    var k = f[g];
                    b.set(k, a.get(k))
                } else
                    for (var m = 0; m < a.length; m++) b.set(m, a[m]);
        return b
    };
    th.keys = function(a) {
        Eg(this.getName(), arguments);
        if (a instanceof Yc || a instanceof bd || typeof a === "string") a = uh(a);
        if (a instanceof Ma || a instanceof id) return new Yc(a.ka());
        return new Yc
    };
    th.values = function(a) {
        Eg(this.getName(), arguments);
        if (a instanceof Yc || a instanceof bd || typeof a === "string") a = uh(a);
        if (a instanceof Ma || a instanceof id) return new Yc(a.Xb());
        return new Yc
    };
    th.entries = function(a) {
        Eg(this.getName(), arguments);
        if (a instanceof Yc || a instanceof bd || typeof a === "string") a = uh(a);
        if (a instanceof Ma || a instanceof id) return new Yc(a.Fb().map(function(b) {
            return new Yc(b)
        }));
        return new Yc
    };
    th.freeze = function(a) {
        (a instanceof Ma || a instanceof id || a instanceof Yc || a instanceof bd) && a.Ha();
        return a
    };
    th.delete = function(a, b) {
        if (a instanceof Ma && !a.xc()) return a.remove(b), !0;
        return !1
    };

    function N(a, b) {
        var c = ya.apply(2, arguments),
            d = a.D.j;
        if (!d) throw Error("Missing program state.");
        if (d.tn) {
            try {
                d.lk.apply(null, [b].concat(ua(c)))
            } catch (e) {
                throw Va("TAGGING", 21), e;
            }
            return
        }
        d.lk.apply(null, [b].concat(ua(c)))
    };
    var vh = function() {
        this.C = {};
        this.j = {};
        this.H = !0;
    };
    vh.prototype.get = function(a, b) {
        var c = this.contains(a) ? this.C[a] : void 0;
        return c
    };
    vh.prototype.contains = function(a) {
        return this.C.hasOwnProperty(a)
    };
    vh.prototype.add = function(a, b, c) {
        if (this.contains(a)) throw Error("Attempting to add a function which already exists: " + a + ".");
        if (this.j.hasOwnProperty(a)) throw Error("Attempting to add an API with an existing private API name: " + a + ".");
        this.C[a] = c ? void 0 : $a(b) ? Sg(a, b) : Tg(a, b)
    };

    function wh(a, b) {
        var c = void 0;
        return c
    };

    function xh(a, b) {}
    xh.F = "internal.safeInvoke";

    function yh() {
        var a = {};
        return a
    };
    var Q = {
            g: {
                sa: "ad_personalization",
                N: "ad_storage",
                O: "ad_user_data",
                R: "analytics_storage",
                sb: "region",
                bc: "consent_updated",
                Yd: "wait_for_update",
                Mi: "app_remove",
                Ni: "app_store_refund",
                Oi: "app_store_subscription_cancel",
                Pi: "app_store_subscription_convert",
                Qi: "app_store_subscription_renew",
                il: "consent_update",
                Ag: "add_payment_info",
                Bg: "add_shipping_info",
                yc: "add_to_cart",
                zc: "remove_from_cart",
                Cg: "view_cart",
                fc: "begin_checkout",
                Ac: "select_item",
                tb: "view_item_list",
                Nb: "select_promotion",
                ub: "view_promotion",
                Ka: "purchase",
                Bc: "refund",
                Pa: "view_item",
                Dg: "add_to_wishlist",
                jl: "exception",
                Ri: "first_open",
                Si: "first_visit",
                ba: "gtag.config",
                Za: "gtag.get",
                Ti: "in_app_purchase",
                hc: "page_view",
                kl: "screen_view",
                Ui: "session_start",
                Pn: "source_update",
                ml: "timing_complete",
                nl: "track_social",
                Yc: "user_engagement",
                ol: "user_id_update",
                be: "gclid_link_decoration_source",
                ce: "gclid_storage_source",
                vb: "gclgb",
                ab: "gclid",
                Vi: "gclid_len",
                Zc: "gclgs",
                bd: "gcllp",
                dd: "gclst",
                fa: "ads_data_redaction",
                Wi: "gad_source",
                Xi: "gad_source_src",
                Yi: "ndclid",
                Zi: "ngad_source",
                aj: "ngbraid",
                bj: "ngclid",
                cj: "ngclsrc",
                de: "gclid_url",
                dj: "gclsrc",
                Eg: "gbraid",
                Bf: "wbraid",
                la: "allow_ad_personalization_signals",
                ee: "allow_custom_scripts",
                fe: "allow_direct_google_requests",
                Cf: "allow_display_features",
                he: "allow_enhanced_conversions",
                ib: "allow_google_signals",
                Aa: "allow_interest_groups",
                pl: "app_id",
                ql: "app_installer_id",
                rl: "app_name",
                sl: "app_version",
                wb: "auid",
                ej: "auto_detection_enabled",
                ic: "aw_remarketing",
                Df: "aw_remarketing_only",
                ie: "discount",
                je: "aw_feed_country",
                ke: "aw_feed_language",
                da: "items",
                me: "aw_merchant_id",
                Fg: "aw_basket_type",
                ed: "campaign_content",
                fd: "campaign_id",
                gd: "campaign_medium",
                hd: "campaign_name",
                jd: "campaign",
                kd: "campaign_source",
                ld: "campaign_term",
                jb: "client_id",
                fj: "rnd",
                Gg: "consent_update_type",
                gj: "content_group",
                ij: "content_type",
                kb: "conversion_cookie_prefix",
                md: "conversion_id",
                wa: "conversion_linker",
                jj: "conversion_linker_disabled",
                jc: "conversion_api",
                Ef: "cookie_deprecation",
                La: "cookie_domain",
                Ma: "cookie_expires",
                Qa: "cookie_flags",
                kc: "cookie_name",
                mb: "cookie_path",
                Fa: "cookie_prefix",
                Ob: "cookie_update",
                Cc: "country",
                Ba: "currency",
                Hg: "customer_buyer_stage",
                nd: "customer_lifetime_value",
                Ig: "customer_loyalty",
                Jg: "customer_ltv_bucket",
                od: "custom_map",
                Kg: "gcldc",
                ne: "dclid",
                Lg: "debug_mode",
                ia: "developer_id",
                kj: "disable_merchant_reported_purchases",
                pd: "dc_custom_params",
                lj: "dc_natural_search",
                Mg: "dynamic_event_settings",
                Ng: "affiliation",
                oe: "checkout_option",
                Ff: "checkout_step",
                Og: "coupon",
                rd: "item_list_name",
                Gf: "list_name",
                mj: "promotions",
                sd: "shipping",
                Hf: "tax",
                pe: "engagement_time_msec",
                qe: "enhanced_client_id",
                se: "enhanced_conversions",
                Pg: "enhanced_conversions_automatic_settings",
                te: "estimated_delivery_date",
                If: "euid_logged_in_state",
                ud: "event_callback",
                tl: "event_category",
                nb: "event_developer_id_string",
                vl: "event_label",
                Dc: "event",
                ue: "event_settings",
                ve: "event_timeout",
                wl: "description",
                xl: "fatal",
                nj: "experiments",
                Jf: "firebase_id",
                Ec: "first_party_collection",
                we: "_x_20",
                xb: "_x_19",
                oj: "fledge_drop_reason",
                Qg: "fledge",
                Rg: "flight_error_code",
                Sg: "flight_error_message",
                pj: "fl_activity_category",
                qj: "fl_activity_group",
                Tg: "fl_advertiser_id",
                rj: "fl_ar_dedupe",
                Ug: "match_id",
                sj: "fl_random_number",
                tj: "tran",
                uj: "u",
                xe: "gac_gclid",
                Fc: "gac_wbraid",
                Vg: "gac_wbraid_multiple_conversions",
                Wg: "ga_restrict_domain",
                Xg: "ga_temp_client_id",
                yl: "ga_temp_ecid",
                mc: "gdpr_applies",
                Yg: "geo_granularity",
                Pb: "value_callback",
                yb: "value_key",
                Gc: "_google_ng",
                Hc: "google_signals",
                Zg: "google_tld",
                ye: "groups",
                ah: "gsa_experiment_id",
                vj: "gtm_up",
                Qb: "iframe_state",
                vd: "ignore_referrer",
                Kf: "internal_traffic_results",
                nc: "is_legacy_converted",
                Rb: "is_legacy_loaded",
                ze: "is_passthrough",
                wd: "_lps",
                Ra: "language",
                Ae: "legacy_developer_id_string",
                xa: "linker",
                Ic: "accept_incoming",
                zb: "decorate_forms",
                U: "domains",
                Sb: "url_position",
                Lf: "merchant_feed_label",
                Mf: "merchant_feed_language",
                Nf: "merchant_id",
                bh: "method",
                zl: "name",
                wj: "navigation_type",
                xd: "new_customer",
                eh: "non_interaction",
                xj: "optimize_id",
                fh: "page_hostname",
                yd: "page_path",
                Ga: "page_referrer",
                cb: "page_title",
                gh: "passengers",
                hh: "phone_conversion_callback",
                yj: "phone_conversion_country_code",
                ih: "phone_conversion_css_class",
                zj: "phone_conversion_ids",
                jh: "phone_conversion_number",
                kh: "phone_conversion_options",
                Al: "_platinum_request_status",
                lh: "_protected_audience_enabled",
                zd: "quantity",
                Be: "redact_device_info",
                Of: "referral_exclusion_definition",
                Qn: "_request_start_time",
                Ab: "restricted_data_processing",
                Aj: "retoken",
                Bl: "sample_rate",
                Pf: "screen_name",
                Tb: "screen_resolution",
                Bj: "_script_source",
                Cj: "search_term",
                Na: "send_page_view",
                oc: "send_to",
                Jc: "server_container_url",
                Bd: "session_duration",
                Ce: "session_engaged",
                Qf: "session_engaged_time",
                Bb: "session_id",
                De: "session_number",
                Rf: "_shared_user_id",
                Cd: "delivery_postal_code",
                Rn: "_tag_firing_delay",
                Sn: "_tag_firing_time",
                Cl: "temporary_client_id",
                Sf: "topmost_url",
                Dj: "tracking_id",
                Tf: "traffic_type",
                Ca: "transaction_id",
                Cb: "transport_url",
                mh: "trip_type",
                rc: "update",
                eb: "url_passthrough",
                Ej: "uptgs",
                Uf: "_user_agent_architecture",
                Vf: "_user_agent_bitness",
                Wf: "_user_agent_full_version_list",
                Xf: "_user_agent_mobile",
                Yf: "_user_agent_model",
                Zf: "_user_agent_platform",
                cg: "_user_agent_platform_version",
                dg: "_user_agent_wow64",
                Da: "user_data",
                nh: "user_data_auto_latency",
                oh: "user_data_auto_meta",
                ph: "user_data_auto_multi",
                qh: "user_data_auto_selectors",
                rh: "user_data_auto_status",
                Dd: "user_data_mode",
                Ee: "user_data_settings",
                Ea: "user_id",
                pb: "user_properties",
                Fj: "_user_region",
                Ed: "us_privacy_string",
                ma: "value",
                sh: "wbraid_multiple_conversions",
                Fd: "_fpm_parameters",
                Mj: "_host_name",
                Nj: "_in_page_command",
                Oj: "_ip_override",
                Pj: "_is_passthrough_cid",
                Ub: "non_personalized_ads",
                Ke: "_sst_parameters",
                lb: "conversion_label",
                oa: "page_location",
                ob: "global_developer_id_string",
                qc: "tc_privacy_string"
            }
        },
        zh = {},
        Ah = Object.freeze((zh[Q.g.la] = 1, zh[Q.g.Cf] = 1, zh[Q.g.he] = 1, zh[Q.g.ib] = 1, zh[Q.g.da] = 1, zh[Q.g.La] = 1, zh[Q.g.Ma] = 1, zh[Q.g.Qa] = 1, zh[Q.g.kc] = 1, zh[Q.g.mb] = 1, zh[Q.g.Fa] = 1, zh[Q.g.Ob] = 1, zh[Q.g.od] = 1, zh[Q.g.ia] = 1, zh[Q.g.Mg] = 1, zh[Q.g.ud] = 1, zh[Q.g.ue] = 1, zh[Q.g.ve] = 1, zh[Q.g.Ec] = 1, zh[Q.g.Wg] = 1, zh[Q.g.Hc] = 1, zh[Q.g.Zg] = 1, zh[Q.g.ye] = 1, zh[Q.g.Kf] = 1, zh[Q.g.nc] = 1, zh[Q.g.Rb] = 1, zh[Q.g.xa] = 1, zh[Q.g.Of] = 1, zh[Q.g.Ab] = 1, zh[Q.g.Na] = 1, zh[Q.g.oc] =
            1, zh[Q.g.Jc] = 1, zh[Q.g.Bd] = 1, zh[Q.g.Qf] = 1, zh[Q.g.Cd] = 1, zh[Q.g.Cb] = 1, zh[Q.g.rc] = 1, zh[Q.g.Ee] = 1, zh[Q.g.pb] = 1, zh[Q.g.Ke] = 1, zh));
    Object.freeze([Q.g.oa, Q.g.Ga, Q.g.cb, Q.g.Ra, Q.g.Pf, Q.g.Ea, Q.g.Jf, Q.g.gj]);
    var Bh = {},
        Ch = Object.freeze((Bh[Q.g.Mi] = 1, Bh[Q.g.Ni] = 1, Bh[Q.g.Oi] = 1, Bh[Q.g.Pi] = 1, Bh[Q.g.Qi] = 1, Bh[Q.g.Ri] = 1, Bh[Q.g.Si] = 1, Bh[Q.g.Ti] = 1, Bh[Q.g.Ui] = 1, Bh[Q.g.Yc] = 1, Bh)),
        Dh = {},
        Eh = Object.freeze((Dh[Q.g.Ag] = 1, Dh[Q.g.Bg] = 1, Dh[Q.g.yc] = 1, Dh[Q.g.zc] = 1, Dh[Q.g.Cg] = 1, Dh[Q.g.fc] = 1, Dh[Q.g.Ac] = 1, Dh[Q.g.tb] = 1, Dh[Q.g.Nb] = 1, Dh[Q.g.ub] = 1, Dh[Q.g.Ka] = 1, Dh[Q.g.Bc] = 1, Dh[Q.g.Pa] = 1, Dh[Q.g.Dg] = 1, Dh)),
        Fh = Object.freeze([Q.g.la, Q.g.fe, Q.g.ib, Q.g.Ob, Q.g.Ec, Q.g.vd, Q.g.Na, Q.g.rc]),
        Gh = Object.freeze([].concat(ua(Fh))),
        Hh = Object.freeze([Q.g.Ma,
            Q.g.ve, Q.g.Bd, Q.g.Qf, Q.g.pe
        ]),
        Ih = Object.freeze([].concat(ua(Hh))),
        Jh = {},
        Kh = (Jh[Q.g.N] = "1", Jh[Q.g.R] = "2", Jh[Q.g.O] = "3", Jh[Q.g.sa] = "4", Jh),
        Lh = {},
        Mh = Object.freeze((Lh[Q.g.be] = 1, Lh[Q.g.ce] = 1, Lh[Q.g.la] = 1, Lh[Q.g.fe] = 1, Lh[Q.g.he] = 1, Lh[Q.g.Aa] = 1, Lh[Q.g.ic] = 1, Lh[Q.g.Df] = 1, Lh[Q.g.ie] = 1, Lh[Q.g.je] = 1, Lh[Q.g.ke] = 1, Lh[Q.g.da] = 1, Lh[Q.g.me] = 1, Lh[Q.g.kb] = 1, Lh[Q.g.wa] = 1, Lh[Q.g.La] = 1, Lh[Q.g.Ma] = 1, Lh[Q.g.Qa] = 1, Lh[Q.g.Fa] = 1, Lh[Q.g.Ba] = 1, Lh[Q.g.Hg] = 1, Lh[Q.g.nd] = 1, Lh[Q.g.Ig] = 1, Lh[Q.g.Jg] = 1, Lh[Q.g.ia] = 1, Lh[Q.g.kj] = 1, Lh[Q.g.se] =
            1, Lh[Q.g.te] = 1, Lh[Q.g.Jf] = 1, Lh[Q.g.Ec] = 1, Lh[Q.g.nc] = 1, Lh[Q.g.Rb] = 1, Lh[Q.g.Ra] = 1, Lh[Q.g.Lf] = 1, Lh[Q.g.Mf] = 1, Lh[Q.g.Nf] = 1, Lh[Q.g.xd] = 1, Lh[Q.g.oa] = 1, Lh[Q.g.Ga] = 1, Lh[Q.g.hh] = 1, Lh[Q.g.ih] = 1, Lh[Q.g.jh] = 1, Lh[Q.g.kh] = 1, Lh[Q.g.Ab] = 1, Lh[Q.g.Na] = 1, Lh[Q.g.oc] = 1, Lh[Q.g.Jc] = 1, Lh[Q.g.Cd] = 1, Lh[Q.g.Ca] = 1, Lh[Q.g.Cb] = 1, Lh[Q.g.rc] = 1, Lh[Q.g.eb] = 1, Lh[Q.g.Da] = 1, Lh[Q.g.Ea] = 1, Lh[Q.g.ma] = 1, Lh)),
        Nh = {},
        Oh = Object.freeze((Nh.search = "s", Nh.youtube = "y", Nh.playstore = "p", Nh.shopping = "h", Nh.ads = "a", Nh.maps = "m", Nh));
    Object.freeze(Q.g);
    var R = {},
        Ph = (R[Q.g.bc] = "gcu", R[Q.g.vb] = "gclgb", R[Q.g.ab] = "gclaw", R[Q.g.Vi] = "gclid_len", R[Q.g.Zc] = "gclgs", R[Q.g.bd] = "gcllp", R[Q.g.dd] = "gclst", R[Q.g.Yi] = "ndclid", R[Q.g.Zi] = "ngad_source", R[Q.g.aj] = "ngbraid", R[Q.g.bj] = "ngclid", R[Q.g.cj] = "ngclsrc", R[Q.g.wb] = "auid", R[Q.g.ie] = "dscnt", R[Q.g.je] = "fcntr", R[Q.g.ke] = "flng", R[Q.g.me] = "mid", R[Q.g.Fg] = "bttype", R[Q.g.jb] = "gacid", R[Q.g.lb] = "label", R[Q.g.jc] = "capi", R[Q.g.Ef] = "pscdl", R[Q.g.Ba] = "currency_code", R[Q.g.Hg] = "clobs", R[Q.g.nd] = "vdltv", R[Q.g.Ig] = "clolo", R[Q.g.Jg] =
            "clolb", R[Q.g.Lg] = "_dbg", R[Q.g.te] = "oedeld", R[Q.g.nb] = "edid", R[Q.g.oj] = "fdr", R[Q.g.Qg] = "fledge", R[Q.g.xe] = "gac", R[Q.g.Fc] = "gacgb", R[Q.g.Vg] = "gacmcov", R[Q.g.mc] = "gdpr", R[Q.g.ob] = "gdid", R[Q.g.Gc] = "_ng", R[Q.g.ah] = "gsaexp", R[Q.g.Qb] = "frm", R[Q.g.ze] = "gtm_up", R[Q.g.wd] = "lps", R[Q.g.Ae] = "did", R[Q.g.Lf] = "fcntr", R[Q.g.Mf] = "flng", R[Q.g.Nf] = "mid", R[Q.g.xd] = void 0, R[Q.g.cb] = "tiba", R[Q.g.Ab] = "rdp", R[Q.g.Bb] = "ecsid", R[Q.g.Rf] = "ga_uid", R[Q.g.Cd] = "delopc", R[Q.g.qc] = "gdpr_consent", R[Q.g.Ca] = "oid", R[Q.g.Ej] = "uptgs",
            R[Q.g.Uf] = "uaa", R[Q.g.Vf] = "uab", R[Q.g.Wf] = "uafvl", R[Q.g.Xf] = "uamb", R[Q.g.Yf] = "uam", R[Q.g.Zf] = "uap", R[Q.g.cg] = "uapv", R[Q.g.dg] = "uaw", R[Q.g.nh] = "ec_lat", R[Q.g.oh] = "ec_meta", R[Q.g.ph] = "ec_m", R[Q.g.qh] = "ec_sel", R[Q.g.rh] = "ec_s", R[Q.g.Dd] = "ec_mode", R[Q.g.Ea] = "userId", R[Q.g.Ed] = "us_privacy", R[Q.g.ma] = "value", R[Q.g.sh] = "mcov", R[Q.g.Mj] = "hn", R[Q.g.Nj] = "gtm_ee", R[Q.g.Ub] = "npa", R[Q.g.md] = null, R[Q.g.Tb] = null, R[Q.g.Ra] = null, R[Q.g.da] = null, R[Q.g.oa] = null, R[Q.g.Ga] = null, R[Q.g.Sf] = null, R[Q.g.Fd] = null, R[Q.g.be] =
            null, R[Q.g.ce] = null, R);

    function Qh(a, b) {
        if (a) {
            var c = a.split("x");
            c.length === 2 && (Rh(b, "u_w", c[0]), Rh(b, "u_h", c[1]))
        }
    }

    function Sh(a, b) {
        a && (a.length === 2 ? Rh(b, "hl", a) : a.length === 5 && (Rh(b, "hl", a.substring(0, 2)), Rh(b, "gl", a.substring(3, 5))))
    }

    function Th(a) {
        var b = Uh;
        b = b === void 0 ? Vh : b;
        var c;
        var d = b;
        if (a && a.length) {
            for (var e = [], f = 0; f < a.length; ++f) {
                var g = a[f];
                g && e.push({
                    item_id: d(g),
                    quantity: g.quantity,
                    value: g.price,
                    start_date: g.start_date,
                    end_date: g.end_date
                })
            }
            c = e
        } else c = [];
        var k;
        var m = c;
        if (m) {
            for (var n = [], p = 0; p < m.length; p++) {
                var q = m[p],
                    r = [];
                q && (r.push(Wh(q.value)), r.push(Wh(q.quantity)), r.push(Wh(q.item_id)), r.push(Wh(q.start_date)), r.push(Wh(q.end_date)), n.push("(" + r.join("*") + ")"))
            }
            k = n.length > 0 ? n.join("") : ""
        } else k = "";
        return k
    }

    function Vh(a) {
        return Xh(a.item_id, a.id, a.item_name)
    }

    function Xh() {
        for (var a = l(ya.apply(0, arguments)), b = a.next(); !b.done; b = a.next()) {
            var c = b.value;
            if (c !== null && c !== void 0) return c
        }
    }

    function Yh(a) {
        if (a && a.length) {
            for (var b = [], c = 0; c < a.length; ++c) {
                var d = a[c];
                d && d.estimated_delivery_date ? b.push("" + d.estimated_delivery_date) : b.push("")
            }
            return b.join(",")
        }
    }

    function Rh(a, b, c) {
        c === void 0 || c === null || c === "" && !cg[b] || (a[b] = c)
    }

    function Wh(a) {
        return typeof a !== "number" && typeof a !== "string" ? "" : a.toString()
    };

    function Zh(a) {
        return $h ? F.querySelectorAll(a) : null
    }

    function ai(a, b) {
        if (!$h) return null;
        if (Element.prototype.closest) try {
            return a.closest(b)
        } catch (e) {
            return null
        }
        var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
            d = a;
        if (!F.documentElement.contains(d)) return null;
        do {
            try {
                if (c.call(d, b)) return d
            } catch (e) {
                break
            }
            d = d.parentElement || d.parentNode
        } while (d !== null && d.nodeType === 1);
        return null
    }
    var bi = !1;
    if (F.querySelectorAll) try {
        var ci = F.querySelectorAll(":root");
        ci && ci.length == 1 && ci[0] == F.documentElement && (bi = !0)
    } catch (a) {}
    var $h = bi;

    function di(a) {
        switch (a) {
            case 0:
                break;
            case 9:
                return "e4";
            case 6:
                return "e5";
            case 14:
                return "e6";
            default:
                return "e7"
        }
    };
    var ei = /^[0-9A-Fa-f]{64}$/;

    function fi(a) {
        try {
            return (new TextEncoder).encode(a)
        } catch (e) {
            for (var b = [], c = 0; c < a.length; c++) {
                var d = a.charCodeAt(c);
                d < 128 ? b.push(d) : d < 2048 ? b.push(192 | d >> 6, 128 | d & 63) : d < 55296 || d >= 57344 ? b.push(224 | d >> 12, 128 | d >> 6 & 63, 128 | d & 63) : (d = 65536 + ((d & 1023) << 10 | a.charCodeAt(++c) & 1023), b.push(240 | d >> 18, 128 | d >> 12 & 63, 128 | d >> 6 & 63, 128 | d & 63))
            }
            return new Uint8Array(b)
        }
    }

    function gi(a) {
        if (a === "" || a === "e0") return Promise.resolve(a);
        var b;
        if ((b = B.crypto) == null ? 0 : b.subtle) {
            if (ei.test(a)) return Promise.resolve(a);
            try {
                var c = fi(a);
                return B.crypto.subtle.digest("SHA-256", c).then(function(d) {
                    var e = Array.from(new Uint8Array(d)).map(function(f) {
                        return String.fromCharCode(f)
                    }).join("");
                    return B.btoa(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
                }).catch(function() {
                    return "e2"
                })
            } catch (d) {
                return Promise.resolve("e2")
            }
        } else return Promise.resolve("e1")
    };

    function hi(a, b) {
        if (a === "") return b;
        var c = Number(a);
        return isNaN(c) ? b : c
    };
    var ii = [],
        ji = {};

    function ki(a) {
        return ii[a] === void 0 ? !1 : ii[a]
    };
    var li = [];

    function mi(a) {
        switch (a) {
            case 0:
                return 0;
            case 52:
                return 10;
            case 53:
                return 11;
            case 54:
                return 1;
            case 55:
                return 2;
            case 56:
                return 7;
            case 85:
                return 3;
            case 115:
                return 4;
            case 117:
                return 5;
            case 133:
                return 9;
            case 134:
                return 6
        }
    }

    function ni(a, b) {
        li[a] = b;
        var c = mi(a);
        c !== void 0 && (ii[c] = b)
    }

    function S(a) {
        ni(a, !0)
    }
    S(40);
    S(35);
    S(36);
    S(37);
    S(38);
    S(58);
    S(104);
    S(21);
    S(145);
    S(20);
    S(152);
    S(144);
    S(86);
    S(118);
    S(9);
    S(59);
    S(6);
    S(110);
    S(141);
    S(100);
    S(93);
    S(116);
    S(158);
    S(129);
    S(22);
    S(109);
    S(83);
    S(114);
    S(153);
    S(117);
    S(7);
    ni(25, !1), S(26);
    ji[1] = hi('1', 6E4);
    ji[3] = hi('10', 1);
    ji[2] = hi('', 50);
    S(30);
    S(15);
    S(92);
    S(112);
    S(142);
    var pi = !1;
    S(122);
    S(13);
    S(11);
    S(156);
    S(134);
    S(125);
    S(29);
    S(80);
    S(133);
    S(95);
    S(99);
    S(113);


    S(98);
    S(132);
    S(115);
    S(96);
    S(32);
    S(60);
    S(24);
    S(61);
    S(17);
    S(149);
    S(82);
    S(150);
    S(138);
    S(138), S(140);
    S(108);
    S(97);
    S(16);

    function T(a) {
        return !!li[a]
    }

    function oi(a, b) {
        for (var c = !1, d = !1, e = 0; c === d;)
            if (c = ((Math.random() * 4294967296 | 0) & 1) === 0, d = ((Math.random() * 4294967296 | 0) & 1) === 0, e++, e > 30) return;
        c ? S(b) : S(a)
    };
    var qi = {
            al: '',
            bl: '',
            fl: '1000',
            Rl: '102067808~102482433~102539968~102558064~102587591~102605417~102640599'
        },
        ri = {
            Nh: Number(qi.al) || 0,
            Oh: Number(qi.bl) || 0,
            im: Number(qi.fl) || 0,
            Kn: qi.Rl
        };

    function U(a) {
        Va("GTM", a)
    }

    function si(a) {
        for (var b = Object.keys(a), c = l(Object.keys(ti)), d = c.next(); !d.done; d = c.next()) {
            var e = d.value;
            b.includes(e) && U(ti[e])
        }
    }
    var ui = {},
        ti = (ui[Q.g.Aa] = 157, ui[Q.g.Jc] = 158, ui[Q.g.Cb] = 159, ui[Q.g.fa] = 160, ui[Q.g.nd] = 161, ui[Q.g.ee] = 162, ui[Q.g.Ob] = 163, ui[Q.g.Fa] = 164, ui[Q.g.Ma] = 165, ui[Q.g.La] = 166, ui[Q.g.kc] = 167, ui[Q.g.mb] = 168, ui[Q.g.Qa] = 169, ui);
    var cj = {
        xh: "52d0"
    };
    cj.Je = Number("0") || 0;
    cj.Lb = "dataLayer";
    cj.Mn = "ChAIgNnLvQYQ1p6U4ru+w417EiQAA2sxy6xndy9jUNFVQPMDFF0G9J26H95lu7Yw1Ut/oY4dL1UaAqIL";
    var dj = {
            __cl: 1,
            __ecl: 1,
            __ehl: 1,
            __evl: 1,
            __fal: 1,
            __fil: 1,
            __fsl: 1,
            __hl: 1,
            __jel: 1,
            __lcl: 1,
            __sdl: 1,
            __tl: 1,
            __ytl: 1
        },
        ej = {
            __paused: 1,
            __tg: 1
        },
        fj;
    for (fj in dj) dj.hasOwnProperty(fj) && (ej[fj] = 1);
    var gj = kb(""),
        hj = !1,
        ij, jj = !1;
    ij = jj;
    var kj, lj = !1;
    kj = lj;
    var mj, nj = !1;
    mj = nj;
    cj.Af = "www.googletagmanager.com";
    var oj = "" + cj.Af + (ij ? "/gtag/js" : "/gtm.js"),
        pj = null,
        qj = null,
        rj = {},
        sj = {};
    cj.Zk = "";
    var tj = "";
    cj.yh = tj;
    var uj = function() {
            this.j = new Set
        },
        wj = function() {
            return Array.from(vj.P.j).join("~")
        },
        xj = function() {
            var a = vj.P,
                b = ri.Kn;
            a.j = new Set;
            if (b !== "")
                for (var c = l(b.split("~")), d = c.next(); !d.done; d = c.next()) {
                    var e = Number(d.value);
                    isNaN(e) || a.j.add(e)
                }
        },
        vj = new function() {
            this.P = new uj;
            this.j = !1;
            this.C = 0;
            this.qa = this.fb = this.sc = this.K = "";
            this.X = this.H = !1
        };

    function yj() {
        var a = vj.K.length;
        return vj.K[a - 1] === "/" ? vj.K.substring(0, a - 1) : vj.K
    }

    function zj() {
        return vj.j ? T(90) ? vj.C === 0 : vj.C !== 1 : !1
    }

    function Aj(a) {
        for (var b = {}, c = l(a.split("|")), d = c.next(); !d.done; d = c.next()) b[d.value] = !0;
        return b
    };
    var Bj = new fb,
        Cj = {},
        Dj = {},
        Gj = {
            name: cj.Lb,
            set: function(a, b) {
                Vc(wb(a, b), Cj);
                Ej()
            },
            get: function(a) {
                return Fj(a, 2)
            },
            reset: function() {
                Bj = new fb;
                Cj = {};
                Ej()
            }
        };

    function Fj(a, b) {
        return b != 2 ? Bj.get(a) : Hj(a)
    }

    function Hj(a, b) {
        var c = a.split(".");
        b = b || [];
        for (var d = Cj, e = 0; e < c.length; e++) {
            if (d === null) return !1;
            if (d === void 0) break;
            d = d[c[e]];
            if (b.indexOf(d) !== -1) return
        }
        return d
    }

    function Ij(a, b) {
        Dj.hasOwnProperty(a) || (Bj.set(a, b), Vc(wb(a, b), Cj), Ej())
    }

    function Jj() {
        for (var a = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], b = 0; b < a.length; b++) {
            var c = a[b],
                d = Fj(c, 1);
            if (Array.isArray(d) || Uc(d)) d = Vc(d, null);
            Dj[c] = d
        }
    }

    function Ej(a) {
        hb(Dj, function(b, c) {
            Bj.set(b, c);
            Vc(wb(b), Cj);
            Vc(wb(b, c), Cj);
            a && delete Dj[b]
        })
    }

    function Kj(a, b) {
        var c, d = (b === void 0 ? 2 : b) !== 1 ? Hj(a) : Bj.get(a);
        Sc(d) === "array" || Sc(d) === "object" ? c = Vc(d, null) : c = d;
        return c
    };
    var Pj = /:[0-9]+$/,
        Qj = /^\d+\.fls\.doubleclick\.net$/;

    function Rj(a, b, c, d) {
        for (var e = [], f = l(a.split("&")), g = f.next(); !g.done; g = f.next()) {
            var k = l(g.value.split("=")),
                m = k.next().value,
                n = ta(k);
            if (decodeURIComponent(m.replace(/\+/g, " ")) === b) {
                var p = n.join("=");
                if (!c) return d ? p : decodeURIComponent(p.replace(/\+/g, " "));
                e.push(d ? p : decodeURIComponent(p.replace(/\+/g, " ")))
            }
        }
        return c ? e : void 0
    }

    function Sj(a, b, c, d, e) {
        b && (b = String(b).toLowerCase());
        if (b === "protocol" || b === "port") a.protocol = Tj(a.protocol) || Tj(B.location.protocol);
        b === "port" ? a.port = String(Number(a.hostname ? a.port : B.location.port) || (a.protocol === "http" ? 80 : a.protocol === "https" ? 443 : "")) : b === "host" && (a.hostname = (a.hostname || B.location.hostname).replace(Pj, "").toLowerCase());
        return Uj(a, b, c, d, e)
    }

    function Uj(a, b, c, d, e) {
        var f, g = Tj(a.protocol);
        b && (b = String(b).toLowerCase());
        switch (b) {
            case "url_no_fragment":
                f = Vj(a);
                break;
            case "protocol":
                f = g;
                break;
            case "host":
                f = a.hostname.replace(Pj, "").toLowerCase();
                if (c) {
                    var k = /^www\d*\./.exec(f);
                    k && k[0] && (f = f.substring(k[0].length))
                }
                break;
            case "port":
                f = String(Number(a.port) || (g === "http" ? 80 : g === "https" ? 443 : ""));
                break;
            case "path":
                a.pathname || a.hostname || Va("TAGGING", 1);
                f = a.pathname.substring(0, 1) === "/" ? a.pathname : "/" + a.pathname;
                var m = f.split("/");
                (d || []).indexOf(m[m.length -
                    1]) >= 0 && (m[m.length - 1] = "");
                f = m.join("/");
                break;
            case "query":
                f = a.search.replace("?", "");
                e && (f = Rj(f, e, !1));
                break;
            case "extension":
                var n = a.pathname.split(".");
                f = n.length > 1 ? n[n.length - 1] : "";
                f = f.split("/")[0];
                break;
            case "fragment":
                f = a.hash.replace("#", "");
                break;
            default:
                f = a && a.href
        }
        return f
    }

    function Tj(a) {
        return a ? a.replace(":", "").toLowerCase() : ""
    }

    function Vj(a) {
        var b = "";
        if (a && a.href) {
            var c = a.href.indexOf("#");
            b = c < 0 ? a.href : a.href.substring(0, c)
        }
        return b
    }
    var Wj = {},
        Xj = 0;

    function Yj(a) {
        var b = Wj[a];
        if (!b) {
            var c = F.createElement("a");
            a && (c.href = a);
            var d = c.pathname;
            d[0] !== "/" && (a || Va("TAGGING", 1), d = "/" + d);
            var e = c.hostname.replace(Pj, "");
            b = {
                href: c.href,
                protocol: c.protocol,
                host: c.host,
                hostname: e,
                pathname: d,
                search: c.search,
                hash: c.hash,
                port: c.port
            };
            Xj < 5 && (Wj[a] = b, Xj++)
        }
        return b
    }

    function Zj(a) {
        var b = Yj(B.location.href),
            c = Sj(b, "host", !1);
        if (c && c.match(Qj)) {
            var d = Sj(b, "path");
            if (d) {
                var e = d.split(a + "=");
                if (e.length > 1) return e[1].split(";")[0].split("?")[0]
            }
        }
    };
    var ak = {
            "https://www.google.com": "/g",
            "https://www.googleadservices.com": "/as",
            "https://pagead2.googlesyndication.com": "/gs"
        },
        bk = ["/as/d/ccm/conversion", "/g/d/ccm/conversion", "/gs/ccm/conversion", "/d/ccm/form-data"];

    function ck(a, b) {
        if (a) {
            var c = "" + a;
            c.indexOf("http://") !== 0 && c.indexOf("https://") !== 0 && (c = "https://" + c);
            c[c.length - 1] === "/" && (c = c.substring(0, c.length - 1));
            return Yj("" + c + b).href
        }
    }

    function dk(a, b) {
        if (zj() || kj) return ck(a, b)
    }

    function ek() {
        return !!cj.yh && cj.yh.split("@@").join("") !== "SGTM_TOKEN"
    }

    function fk(a) {
        for (var b = l([Q.g.Jc, Q.g.Cb]), c = b.next(); !c.done; c = b.next()) {
            var d = V(a, c.value);
            if (d) return d
        }
    }

    function gk(a, b, c) {
        c = c === void 0 ? "" : c;
        if (!zj()) return a;
        var d = b ? ak[a] || "" : "";
        d === "/gs" && (c = "");
        return "" + yj() + d + c
    }

    function hk(a) {
        if (!zj()) return a;
        for (var b = l(bk), c = b.next(); !c.done; c = b.next())
            if (tb(a, "" + yj() + c.value)) return a + "&_uip=" + encodeURIComponent("::");
        return a
    };

    function ik(a) {
        var b = String(a[Le.ra] || "").replace(/_/g, "");
        return tb(b, "cvt") ? "cvt" : b
    }
    var jk = B.location.search.indexOf("?gtm_latency=") >= 0 || B.location.search.indexOf("&gtm_latency=") >= 0;
    var kk = {
            sampleRate: "0.005000",
            Vk: "",
            Jn: "0.01"
        },
        lk = Math.random(),
        mk;
    if (!(mk = jk)) {
        var nk = kk.sampleRate;
        mk = lk < Number(nk)
    }
    var ok = mk,
        pk = (gc == null ? void 0 : gc.includes("gtm_debug=d")) || jk || lk >= 1 - Number(kk.Jn);
    var qk = /gtag[.\/]js/,
        rk = /gtm[.\/]js/,
        sk = !1;

    function tk(a) {
        if (sk) return "1";
        var b, c = (b = a.scriptElement) == null ? void 0 : b.src;
        if (c) {
            if (qk.test(c)) return "3";
            if (rk.test(c)) return "2"
        }
        return "0"
    };

    function uk(a, b) {
        var c = vk();
        c.pending || (c.pending = []);
        cb(c.pending, function(d) {
            return d.target.ctid === a.ctid && d.target.isDestination === a.isDestination
        }) || c.pending.push({
            target: a,
            onLoad: b
        })
    }

    function wk() {
        var a = B.google_tags_first_party;
        Array.isArray(a) || (a = []);
        for (var b = {}, c = l(a), d = c.next(); !d.done; d = c.next()) b[d.value] = !0;
        return Object.freeze(b)
    }
    var xk = function() {
        this.container = {};
        this.destination = {};
        this.canonical = {};
        this.pending = [];
        this.siloed = [];
        this.injectedFirstPartyContainers = {};
        this.injectedFirstPartyContainers = wk()
    };

    function vk() {
        var a = hc("google_tag_data", {}),
            b = a.tidr;
        b && typeof b === "object" || (b = new xk, a.tidr = b);
        var c = b;
        c.container || (c.container = {});
        c.destination || (c.destination = {});
        c.canonical || (c.canonical = {});
        c.pending || (c.pending = []);
        c.siloed || (c.siloed = []);
        c.injectedFirstPartyContainers || (c.injectedFirstPartyContainers = wk());
        return c
    };
    var yk = {},
        zk = !1,
        Ak = void 0,
        Qf = {
            ctid: "GTM-W8KL5Q5",
            canonicalContainerId: "117991082",
            Ak: "GTM-W8KL5Q5",
            Bk: "GTM-W8KL5Q5"
        };
    yk.Ge = kb("");

    function Bk() {
        return yk.Ge && Ck().some(function(a) {
            return a === Qf.ctid
        })
    }

    function Dk() {
        var a = Ek();
        return zk ? a.map(Fk) : a
    }

    function Gk() {
        var a = Ck();
        return zk ? a.map(Fk) : a
    }

    function Hk() {
        var a = Gk();
        if (T(137) && !zk)
            for (var b = l([].concat(ua(a))), c = b.next(); !c.done; c = b.next()) {
                var d = Fk(c.value),
                    e = vk().destination[d];
                e && e.state !== 0 || a.push(d)
            }
        return a
    }

    function Ik() {
        return Jk(Qf.ctid)
    }

    function Kk() {
        return Jk(Qf.canonicalContainerId || "_" + Qf.ctid)
    }

    function Ek() {
        return Qf.Ak ? Qf.Ak.split("|") : [Qf.ctid]
    }

    function Ck() {
        return Qf.Bk ? Qf.Bk.split("|") : []
    }

    function Lk() {
        var a = Mk(Nk()),
            b = a && a.parent;
        if (b) return Mk(b)
    }

    function Mk(a) {
        var b = vk();
        return a.isDestination ? b.destination[a.ctid] : b.container[a.ctid]
    }

    function Jk(a) {
        return zk ? Fk(a) : a
    }

    function Fk(a) {
        return "siloed_" + a
    }

    function Ok(a) {
        return T(137) ? Pk(a) : zk ? Pk(a) : a
    }

    function Pk(a) {
        a = String(a);
        return tb(a, "siloed_") ? a.substring(7) : a
    }

    function Qk() {
        if (vj.H) {
            var a = vk();
            if (a.siloed) {
                for (var b = [], c = Ek().map(Fk), d = Ck().map(Fk), e = {}, f = 0; f < a.siloed.length; e = {
                        ig: void 0
                    }, f++) e.ig = a.siloed[f], !zk && cb(e.ig.isDestination ? d : c, function(g) {
                    return function(k) {
                        return k === g.ig.ctid
                    }
                }(e)) ? zk = !0 : b.push(e.ig);
                a.siloed = b
            }
        }
    }

    function Rk() {
        var a = vk();
        if (a.pending) {
            for (var b, c = [], d = !1, e = Dk(), f = Ak ? Ak : Hk(), g = {}, k = 0; k < a.pending.length; g = {
                    qf: void 0
                }, k++) g.qf = a.pending[k], cb(g.qf.target.isDestination ? f : e, function(m) {
                return function(n) {
                    return n === m.qf.target.ctid
                }
            }(g)) ? d || (b = g.qf.onLoad, d = !0) : c.push(g.qf);
            a.pending = c;
            if (b) try {
                b(Kk())
            } catch (m) {}
        }
    }

    function Sk() {
        var a = Qf.ctid,
            b = Dk(),
            c = Hk();
        Ak = c;
        for (var d = function(n, p) {
                var q = {
                    canonicalContainerId: Qf.canonicalContainerId,
                    scriptContainerId: a,
                    state: 2,
                    containers: b.slice(),
                    destinations: c.slice()
                };
                fc && (q.scriptElement = fc);
                gc && (q.scriptSource = gc);
                if (Lk() === void 0) {
                    var r;
                    a: {
                        if ((q.scriptContainerId || "").indexOf("GTM-") >= 0) {
                            var t;
                            b: {
                                var v, u = (v = q.scriptElement) == null ? void 0 : v.src;
                                if (u) {
                                    for (var w = vj.j, y = Yj(u), x = w ? y.pathname : "" + y.hostname + y.pathname, A = F.scripts, C = "", D = 0; D < A.length; ++D) {
                                        var E = A[D];
                                        if (!(E.innerHTML.length ===
                                                0 || !w && E.innerHTML.indexOf(q.scriptContainerId || "SHOULD_NOT_BE_SET") < 0 || E.innerHTML.indexOf(x) < 0)) {
                                            if (E.innerHTML.indexOf("(function(w,d,s,l,i)") >= 0) {
                                                t = String(D);
                                                break b
                                            }
                                            C = String(D)
                                        }
                                    }
                                    if (C) {
                                        t = C;
                                        break b
                                    }
                                }
                                t = void 0
                            }
                            var I = t;
                            if (I) {
                                sk = !0;
                                r = I;
                                break a
                            }
                        }
                        var H = [].slice.call(document.scripts);r = q.scriptElement ? String(H.indexOf(q.scriptElement)) : "-1"
                    }
                    q.htmlLoadOrder = r;
                    q.loadScriptType = tk(q)
                }
                var O = p ? e.destination : e.container,
                    K = O[n];
                K ? (p && K.state === 0 && U(93), Object.assign(K, q)) : O[n] = q
            }, e = vk(), f = l(b), g = f.next(); !g.done; g =
            f.next()) d(g.value, !1);
        for (var k = l(c), m = k.next(); !m.done; m = k.next()) d(m.value, !0);
        e.canonical[Kk()] = {};
        Rk()
    }

    function Tk() {
        var a = Kk();
        return !!vk().canonical[a]
    }

    function Uk(a) {
        return !!vk().container[a]
    }

    function Vk(a) {
        var b = vk().destination[a];
        return !!b && !!b.state
    }

    function Nk() {
        return {
            ctid: Ik(),
            isDestination: yk.Ge
        }
    }

    function Wk(a, b, c) {
        b.siloed && Xk({
            ctid: a,
            isDestination: !1
        });
        var d = Nk();
        vk().container[a] = {
            state: 1,
            context: b,
            parent: d
        };
        uk({
            ctid: a,
            isDestination: !1
        }, c)
    }

    function Xk(a) {
        var b = vk();
        (b.siloed = b.siloed || []).push(a)
    }

    function Yk() {
        var a = vk().container,
            b;
        for (b in a)
            if (a.hasOwnProperty(b) && a[b].state === 1) return !0;
        return !1
    }

    function Zk() {
        var a = {};
        hb(vk().destination, function(b, c) {
            c.state === 0 && (a[Pk(b)] = c)
        });
        return a
    }

    function $k(a) {
        return !!(a && a.parent && a.context && a.context.source === 1 && a.parent.ctid.indexOf("GTM-") !== 0)
    }

    function al() {
        for (var a = vk(), b = l(Dk()), c = b.next(); !c.done; c = b.next())
            if (a.injectedFirstPartyContainers[c.value]) return !0;
        return !1
    }

    function bl(a) {
        var b = vk();
        return b.destination[a] ? 1 : b.destination[Fk(a)] ? 2 : 0
    };
    var cl = "/td?id=" + Qf.ctid,
        dl = ["v", "t", "pid", "dl", "tdp"],
        el = ["mcc"],
        fl = {},
        gl = {};

    function hl(a, b, c) {
        gl[a] = b;
        (c === void 0 || c) && il(a)
    }

    function il(a, b) {
        if (fl[a] === void 0 || (b === void 0 ? 0 : b)) fl[a] = !0
    }

    function jl(a) {
        a = a === void 0 ? !1 : a;
        var b = Object.keys(fl).filter(function(c) {
            return fl[c] === !0 && gl[c] !== void 0 && (a || !el.includes(c))
        }).map(function(c) {
            var d = gl[c];
            typeof d === "function" && (d = d());
            return d ? "&" + c + "=" + d : ""
        }).join("");
        return "" + gk("https://www.googletagmanager.com") + cl + ("" + b + "&z=0")
    }

    function kl() {
        Object.keys(fl).forEach(function(a) {
            dl.indexOf(a) < 0 && (fl[a] = !1)
        })
    }

    function ll(a) {
        a = a === void 0 ? !1 : a;
        if ((!T(8) || vj.X) && pk && Qf.ctid) {
            var b = jl(a);
            a ? Cc(b) : sc(b);
            kl()
        }
    }
    var ml = {};

    function nl() {
        Object.keys(fl).filter(function(a) {
            return fl[a] && !dl.includes(a)
        }).length > 0 && ll(!0)
    }
    var ol = db();

    function pl() {
        ol = db()
    }

    function ql() {
        hl("v", "3");
        hl("t", "t");
        hl("pid", function() {
            return String(ol)
        });
        tc(B, "pagehide", nl);
        B.setInterval(pl, 864E5)
    };

    function rl() {
        var a = hc("google_tag_data", {});
        return a.ics = a.ics || new sl
    }
    var sl = function() {
        this.entries = {};
        this.waitPeriodTimedOut = this.wasSetLate = this.accessedAny = this.accessedDefault = this.usedImplicit = this.usedUpdate = this.usedDefault = this.usedDeclare = this.active = !1;
        this.j = []
    };
    sl.prototype.default = function(a, b, c, d, e, f, g) {
        this.usedDefault || this.usedDeclare || !this.accessedDefault && !this.accessedAny || (this.wasSetLate = !0);
        this.usedDefault = this.active = !0;
        Va("TAGGING", 19);
        b == null ? Va("TAGGING", 18) : tl(this, a, b === "granted", c, d, e, f, g)
    };
    sl.prototype.waitForUpdate = function(a, b, c) {
        for (var d = 0; d < a.length; d++) tl(this, a[d], void 0, void 0, "", "", b, c)
    };
    var tl = function(a, b, c, d, e, f, g, k) {
        var m = a.entries,
            n = m[b] || {},
            p = n.region,
            q = d && z(d) ? d.toUpperCase() : void 0;
        e = e.toUpperCase();
        f = f.toUpperCase();
        if (e === "" || q === f || (q === e ? p !== f : !q && !p)) {
            var r = !!(g && g > 0 && n.update === void 0),
                t = {
                    region: q,
                    declare_region: n.declare_region,
                    implicit: n.implicit,
                    default: c !== void 0 ? c : n.default,
                    declare: n.declare,
                    update: n.update,
                    quiet: r
                };
            if (e !== "" || n.default !== !1) m[b] = t;
            r && B.setTimeout(function() {
                m[b] === t && t.quiet && (Va("TAGGING", 2), a.waitPeriodTimedOut = !0, a.clearTimeout(b, void 0, k),
                    a.notifyListeners())
            }, g)
        }
    };
    h = sl.prototype;
    h.clearTimeout = function(a, b, c) {
        var d = [a],
            e = c.delegatedConsentTypes,
            f;
        for (f in e) e.hasOwnProperty(f) && e[f] === a && d.push(f);
        var g = this.entries[a] || {},
            k = this.getConsentState(a, c);
        if (g.quiet) {
            g.quiet = !1;
            for (var m = l(d), n = m.next(); !n.done; n = m.next()) ul(this, n.value)
        } else if (b !== void 0 && k !== b)
            for (var p = l(d), q = p.next(); !q.done; q = p.next()) ul(this, q.value)
    };
    h.update = function(a, b, c) {
        this.usedDefault || this.usedDeclare || this.usedUpdate || !this.accessedAny || (this.wasSetLate = !0);
        this.usedUpdate = this.active = !0;
        if (b != null) {
            var d = this.getConsentState(a, c),
                e = this.entries;
            (e[a] = e[a] || {}).update = b === "granted";
            this.clearTimeout(a, d, c)
        }
    };
    h.declare = function(a, b, c, d, e) {
        this.usedDeclare = this.active = !0;
        var f = this.entries,
            g = f[a] || {},
            k = g.declare_region,
            m = c && z(c) ? c.toUpperCase() : void 0;
        d = d.toUpperCase();
        e = e.toUpperCase();
        if (d === "" || m === e || (m === d ? k !== e : !m && !k)) {
            var n = {
                region: g.region,
                declare_region: m,
                declare: b === "granted",
                implicit: g.implicit,
                default: g.default,
                update: g.update,
                quiet: g.quiet
            };
            if (d !== "" || g.declare !== !1) f[a] = n
        }
    };
    h.implicit = function(a, b) {
        this.usedImplicit = !0;
        var c = this.entries,
            d = c[a] = c[a] || {};
        d.implicit !== !1 && (d.implicit = b === "granted")
    };
    h.getConsentState = function(a, b) {
        var c = this.entries,
            d = c[a] || {},
            e = d.update;
        if (e !== void 0) return e ? 1 : 2;
        if (b.usedContainerScopedDefaults) {
            var f = b.containerScopedDefaults[a];
            if (f === 3) return 1;
            if (f === 2) return 2
        } else if (e = d.default, e !== void 0) return e ? 1 : 2;
        if (b == null ? 0 : b.delegatedConsentTypes.hasOwnProperty(a)) {
            var g = b.delegatedConsentTypes[a],
                k = c[g] || {};
            e = k.update;
            if (e !== void 0) return e ? 1 : 2;
            if (b.usedContainerScopedDefaults) {
                var m = b.containerScopedDefaults[g];
                if (m === 3) return 1;
                if (m === 2) return 2
            } else if (e =
                k.default, e !== void 0) return e ? 1 : 2
        }
        e = d.declare;
        if (e !== void 0) return e ? 1 : 2;
        e = d.implicit;
        return e !== void 0 ? e ? 3 : 4 : 0
    };
    h.addListener = function(a, b) {
        this.j.push({
            consentTypes: a,
            Ld: b
        })
    };
    var ul = function(a, b) {
        for (var c = 0; c < a.j.length; ++c) {
            var d = a.j[c];
            Array.isArray(d.consentTypes) && d.consentTypes.indexOf(b) !== -1 && (d.Ck = !0)
        }
    };
    sl.prototype.notifyListeners = function(a, b) {
        for (var c = 0; c < this.j.length; ++c) {
            var d = this.j[c];
            if (d.Ck) {
                d.Ck = !1;
                try {
                    d.Ld({
                        consentEventId: a,
                        consentPriorityId: b
                    })
                } catch (e) {}
            }
        }
    };
    var vl = !1,
        wl = !1,
        xl = {},
        yl = {
            delegatedConsentTypes: {},
            corePlatformServices: {},
            usedCorePlatformServices: !1,
            selectedAllCorePlatformServices: !1,
            containerScopedDefaults: (xl.ad_storage = 1, xl.analytics_storage = 1, xl.ad_user_data = 1, xl.ad_personalization = 1, xl),
            usedContainerScopedDefaults: !1
        };

    function zl(a) {
        var b = rl();
        b.accessedAny = !0;
        return (z(a) ? [a] : a).every(function(c) {
            switch (b.getConsentState(c, yl)) {
                case 1:
                case 3:
                    return !0;
                case 2:
                case 4:
                    return !1;
                default:
                    return !0
            }
        })
    }

    function Al(a) {
        var b = rl();
        b.accessedAny = !0;
        return b.getConsentState(a, yl)
    }

    function Bl(a) {
        for (var b = {}, c = l(a), d = c.next(); !d.done; d = c.next()) {
            var e = d.value;
            b[e] = yl.corePlatformServices[e] !== !1
        }
        return b
    }

    function Cl(a) {
        var b = rl();
        b.accessedAny = !0;
        return !(b.entries[a] || {}).quiet
    }

    function Dl() {
        if (!ki(8)) return !1;
        var a = rl();
        a.accessedAny = !0;
        if (a.active) return !0;
        if (!yl.usedContainerScopedDefaults) return !1;
        for (var b = l(Object.keys(yl.containerScopedDefaults)), c = b.next(); !c.done; c = b.next())
            if (yl.containerScopedDefaults[c.value] !== 1) return !0;
        return !1
    }

    function El(a, b) {
        rl().addListener(a, b)
    }

    function Fl(a, b) {
        rl().notifyListeners(a, b)
    }

    function Gl(a, b) {
        function c() {
            for (var e = 0; e < b.length; e++)
                if (!Cl(b[e])) return !0;
            return !1
        }
        if (c()) {
            var d = !1;
            El(b, function(e) {
                d || c() || (d = !0, a(e))
            })
        } else a({})
    }

    function Hl(a, b) {
        function c() {
            for (var k = [], m = 0; m < e.length; m++) {
                var n = e[m];
                zl(n) && !f[n] && k.push(n)
            }
            return k
        }

        function d(k) {
            for (var m = 0; m < k.length; m++) f[k[m]] = !0
        }
        var e = z(b) ? [b] : b,
            f = {},
            g = c();
        g.length !== e.length && (d(g), El(e, function(k) {
            function m(q) {
                q.length !== 0 && (d(q), k.consentTypes = q, a(k))
            }
            var n = c();
            if (n.length !== 0) {
                var p = Object.keys(f).length;
                n.length + p >= e.length ? m(n) : B.setTimeout(function() {
                    m(c())
                }, 500)
            }
        }))
    };
    var Il = ["ad_storage", "analytics_storage", "ad_user_data", "ad_personalization"],
        Jl = [Q.g.Jc, Q.g.Cb, Q.g.Ec, Q.g.jb, Q.g.Bb, Q.g.Ea, Q.g.xa, Q.g.Fa, Q.g.La, Q.g.mb],
        Kl = !1,
        Ll = !1,
        Ml = {},
        Nl = {};

    function Ol() {
        !Ll && Kl && (Il.some(function(a) {
            return yl.containerScopedDefaults[a] !== 1
        }) || Pl("mbc"));
        Ll = !0
    }

    function Pl(a) {
        pk && (hl(a, "1"), ll())
    }

    function Ql(a, b) {
        if (!Ml[b] && (Ml[b] = !0, Nl[b]))
            for (var c = l(Jl), d = c.next(); !d.done; d = c.next())
                if (a.hasOwnProperty(d.value)) {
                    Pl("erc");
                    break
                }
    };

    function Rl(a) {
        Va("HEALTH", a)
    };
    var Sl = {
            vm: "eyIwIjoiSU4iLCIxIjoiSU4tUEIiLCIyIjpmYWxzZSwiMyI6Imdvb2dsZS5jby5pbiIsIjQiOiIiLCI1Ijp0cnVlLCI2IjpmYWxzZSwiNyI6ImFkX3N0b3JhZ2V8YW5hbHl0aWNzX3N0b3JhZ2V8YWRfdXNlcl9kYXRhfGFkX3BlcnNvbmFsaXphdGlvbiJ9"
        },
        Tl = {};

    function Ul() {
        var a = Sl.vm;
        try {
            return JSON.parse(Ta(a))
        } catch (b) {
            return U(123), Rl(2), {}
        }
    }

    function Vl() {
        return Tl["0"] || ""
    }

    function Wl() {
        return Tl["1"] || ""
    }

    function Xl() {
        var a = !1;
        return a
    }

    function Yl() {
        return Tl["6"] !== !1
    }

    function Zl() {
        var a = "";
        return a
    }

    function $l() {
        var a = !1;
        return a
    }

    function am() {
        var a = "";
        return a
    };

    function bm(a) {
        return a && a.indexOf("pending:") === 0 ? cm(a.substr(8)) : !1
    }

    function cm(a) {
        if (a == null || a.length === 0) return !1;
        var b = Number(a),
            c = ob();
        return b < c + 3E5 && b > c - 9E5
    };
    var dm = !1,
        em = !1,
        fm = !1,
        gm = 0,
        hm = !1,
        im = [];

    function jm(a) {
        if (gm === 0) hm && im && (im.length >= 100 && im.shift(), im.push(a));
        else if (km()) {
            var b = hc('google.tagmanager.ta.prodqueue', []);
            b.length >= 50 && b.shift();
            b.push(a)
        }
    }

    function lm() {
        mm();
        uc(F, "TAProdDebugSignal", lm)
    }

    function mm() {
        if (!em) {
            em = !0;
            nm();
            var a = im;
            im = void 0;
            a == null || a.forEach(function(b) {
                jm(b)
            })
        }
    }

    function nm() {
        var a = F.documentElement.getAttribute("data-tag-assistant-prod-present");
        cm(a) ? gm = 1 : !bm(a) || dm || fm ? gm = 2 : (fm = !0, tc(F, "TAProdDebugSignal", lm, !1), B.setTimeout(function() {
            mm();
            dm = !0
        }, 200))
    }

    function km() {
        if (!hm) return !1;
        switch (gm) {
            case 1:
            case 0:
                return !0;
            case 2:
                return !1;
            default:
                return !1
        }
    };
    var om = !1;

    function pm(a, b) {
        var c = Ek(),
            d = Ck();
        if (km()) {
            var e = qm("INIT");
            e.containerLoadSource = a != null ? a : 0;
            b && (e.parentTargetReference = b);
            e.aliases = c;
            e.destinations = d;
            jm(e)
        }
    }

    function rm(a) {
        var b, c, d, e;
        b = a.targetId;
        c = a.request;
        d = a.Ta;
        e = a.isBatched;
        if (km()) {
            var f = qm("GTAG_HIT", {
                eventId: d.eventId,
                priorityId: d.priorityId
            });
            f.target = b;
            f.url = c.url;
            c.postBody && (f.postBody = c.postBody);
            f.parameterEncoding = c.parameterEncoding;
            f.endpoint = c.endpoint;
            e !== void 0 && (f.isBatched = e);
            jm(f)
        }
    }

    function sm(a) {
        km() && rm(a())
    }

    function qm(a, b) {
        b = b === void 0 ? {} : b;
        b.groupId = tm;
        var c, d = b,
            e = {
                publicId: um
            };
        d.eventId != null && (e.eventId = d.eventId);
        d.priorityId != null && (e.priorityId = d.priorityId);
        d.eventName && (e.eventName = d.eventName);
        d.groupId && (e.groupId = d.groupId);
        d.tagName && (e.tagName = d.tagName);
        c = {
            containerProduct: "GTM",
            key: e,
            version: '9',
            messageType: a
        };
        c.containerProduct = om ? "OGT" : "GTM";
        c.key.targetRef = vm;
        return c
    }
    var um = "",
        vm = {
            ctid: "",
            isDestination: !1
        },
        tm;

    function wm(a) {
        var b = Qf.ctid,
            c = Bk(),
            d = T(121);
        d && (gm = 0, hm = !0, nm());
        d && (tm = a, um = b, om = ij, vm = {
            ctid: b,
            isDestination: c
        })
    };
    var xm = [Q.g.N, Q.g.R, Q.g.O, Q.g.sa],
        ym, zm;

    function Am(a) {
        for (var b = a[Q.g.sb], c = Array.isArray(b) ? b : [b], d = {
                bf: 0
            }; d.bf < c.length; d = {
                bf: d.bf
            }, ++d.bf) hb(a, function(e) {
            return function(f, g) {
                if (f !== Q.g.sb) {
                    var k = c[e.bf],
                        m = Vl(),
                        n = Wl();
                    wl = !0;
                    vl && Va("TAGGING", 20);
                    rl().declare(f, g, k, m, n)
                }
            }
        }(d))
    }

    function Bm(a) {
        Ol();
        !zm && ym && Pl("crc");
        zm = !0;
        var b = a[Q.g.sb];
        b && U(40);
        var c = a[Q.g.Yd];
        c && U(41);
        for (var d = Array.isArray(b) ? b : [b], e = {
                cf: 0
            }; e.cf < d.length; e = {
                cf: e.cf
            }, ++e.cf) hb(a, function(f) {
            return function(g, k) {
                if (g !== Q.g.sb && g !== Q.g.Yd) {
                    var m = d[f.cf],
                        n = Number(c),
                        p = Vl(),
                        q = Wl();
                    n = n === void 0 ? 0 : n;
                    vl = !0;
                    wl && Va("TAGGING", 20);
                    rl().default(g, k, m, p, q, n, yl)
                }
            }
        }(e))
    }

    function Cm(a) {
        yl.usedContainerScopedDefaults = !0;
        var b = a[Q.g.sb];
        if (b) {
            var c = Array.isArray(b) ? b : [b];
            if (!c.includes(Wl()) && !c.includes(Vl())) return
        }
        hb(a, function(d, e) {
            switch (d) {
                case "ad_storage":
                case "analytics_storage":
                case "ad_user_data":
                case "ad_personalization":
                    break;
                default:
                    return
            }
            yl.usedContainerScopedDefaults = !0;
            yl.containerScopedDefaults[d] = e === "granted" ? 3 : 2
        })
    }

    function Dm(a, b) {
        Ol();
        ym = !0;
        hb(a, function(c, d) {
            vl = !0;
            wl && Va("TAGGING", 20);
            rl().update(c, d, yl)
        });
        Fl(b.eventId, b.priorityId)
    }

    function Em(a) {
        a.hasOwnProperty("all") && (yl.selectedAllCorePlatformServices = !0, hb(Oh, function(b) {
            yl.corePlatformServices[b] = a.all === "granted";
            yl.usedCorePlatformServices = !0
        }));
        hb(a, function(b, c) {
            b !== "all" && (yl.corePlatformServices[b] = c === "granted", yl.usedCorePlatformServices = !0)
        })
    }

    function W(a) {
        Array.isArray(a) || (a = [a]);
        return a.every(function(b) {
            return zl(b)
        })
    }

    function Fm(a, b) {
        El(a, b)
    }

    function Gm(a, b) {
        Hl(a, b)
    }

    function Hm(a, b) {
        Gl(a, b)
    }

    function Im() {
        var a = [Q.g.N, Q.g.sa, Q.g.O];
        rl().waitForUpdate(a, 500, yl)
    }

    function Jm(a) {
        for (var b = l(a), c = b.next(); !c.done; c = b.next()) {
            var d = c.value;
            rl().clearTimeout(d, void 0, yl)
        }
        Fl()
    }

    function Km() {
        if (!mj)
            for (var a = Yl() ? Aj(vj.fb) : Aj(vj.sc), b = 0; b < xm.length; b++) {
                var c = xm[b],
                    d = c,
                    e = a[c] ? "granted" : "denied";
                rl().implicit(d, e)
            }
    };
    var Lm = !1,
        Mm = [];

    function Nm() {
        if (!Lm) {
            Lm = !0;
            for (var a = Mm.length - 1; a >= 0; a--) Mm[a]();
            Mm = []
        }
    };
    var Om = B.google_tag_manager = B.google_tag_manager || {};

    function Pm(a, b) {
        return Om[a] = Om[a] || b()
    }

    function Qm() {
        var a = Ik(),
            b = Rm;
        Om[a] = Om[a] || b
    }

    function Sm() {
        var a = cj.Lb;
        return Om[a] = Om[a] || {}
    }

    function Tm() {
        var a = Om.sequence || 1;
        Om.sequence = a + 1;
        return a
    };
    var Um = {
            bk: "service_worker_endpoint",
            zh: "shared_user_id",
            Ah: "shared_user_id_requested",
            Le: "shared_user_id_source",
            zf: "cookie_deprecation_label"
        },
        Vm;

    function Wm(a) {
        if (!Vm) {
            Vm = {};
            for (var b = l(Object.keys(Um)), c = b.next(); !c.done; c = b.next()) Vm[Um[c.value]] = !0
        }
        return !!Vm[a]
    }

    function Xm(a, b) {
        b = b === void 0 ? !1 : b;
        if (Wm(a)) {
            var c, d, e = (d = (c = hc("google_tag_data", {})).xcd) != null ? d : c.xcd = {};
            if (e[a]) return e[a];
            if (b) {
                var f = void 0,
                    g = 1,
                    k = {},
                    m = {
                        set: function(n) {
                            f = n;
                            m.notify()
                        },
                        get: function() {
                            return f
                        },
                        subscribe: function(n) {
                            k[String(g)] = n;
                            return g++
                        },
                        unsubscribe: function(n) {
                            var p = String(n);
                            return k.hasOwnProperty(p) ? (delete k[p], !0) : !1
                        },
                        notify: function() {
                            for (var n = l(Object.keys(k)), p = n.next(); !p.done; p = n.next()) {
                                var q = p.value;
                                try {
                                    k[q](a, f)
                                } catch (r) {}
                            }
                        }
                    };
                return e[a] = m
            }
        }
    }

    function Ym(a, b) {
        var c = Xm(a, !0);
        c && c.set(b)
    }

    function Zm(a) {
        var b;
        return (b = Xm(a)) == null ? void 0 : b.get()
    }

    function $m(a, b) {
        if (typeof b === "function") {
            var c;
            return (c = Xm(a, !0)) == null ? void 0 : c.subscribe(b)
        }
    }

    function an(a, b) {
        var c = Xm(a);
        return c ? c.unsubscribe(b) : !1
    };

    function bn() {
        if (Om.pscdl !== void 0) Zm(Um.zf) === void 0 && Ym(Um.zf, Om.pscdl);
        else {
            var a = function(c) {
                    Om.pscdl = c;
                    Ym(Um.zf, c)
                },
                b = function() {
                    a("error")
                };
            try {
                dc.cookieDeprecationLabel ? (a("pending"), dc.cookieDeprecationLabel.getValue().then(a).catch(b)) : a("noapi")
            } catch (c) {
                b(c)
            }
        }
    };

    function cn(a, b) {
        b && hb(b, function(c, d) {
            typeof d !== "object" && d !== void 0 && (a["1p." + c] = String(d))
        })
    };
    var dn = /[A-Z]+/,
        en = /\s/;

    function fn(a, b) {
        if (z(a)) {
            a = mb(a);
            var c = a.indexOf("-");
            if (!(c < 0)) {
                var d = a.substring(0, c);
                if (dn.test(d)) {
                    var e = a.substring(c + 1),
                        f;
                    if (b) {
                        var g = function(n) {
                            var p = n.indexOf("/");
                            return p < 0 ? [n] : [n.substring(0, p), n.substring(p + 1)]
                        };
                        f = g(e);
                        if (d === "DC" && f.length === 2) {
                            var k = g(f[1]);
                            k.length === 2 && (f[1] = k[0], f.push(k[1]))
                        }
                    } else {
                        f = e.split("/");
                        for (var m = 0; m < f.length; m++)
                            if (!f[m] || en.test(f[m]) && (d !== "AW" || m !== 1)) return
                    }
                    return {
                        id: a,
                        prefix: d,
                        destinationId: d + "-" + f[0],
                        ids: f
                    }
                }
            }
        }
    }

    function gn(a, b) {
        for (var c = {}, d = 0; d < a.length; ++d) {
            var e = fn(a[d], b);
            e && (c[e.id] = e)
        }
        hn(c);
        var f = [];
        hb(c, function(g, k) {
            f.push(k)
        });
        return f
    }

    function hn(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                d.prefix === "AW" && d.ids[jn[2]] && b.push(d.destinationId)
            }
        for (var e = 0; e < b.length; ++e) delete a[b[e]]
    }
    var kn = {},
        jn = (kn[0] = 0, kn[1] = 0, kn[2] = 1, kn[3] = 0, kn[4] = 1, kn[5] = 2, kn[6] = 0, kn[7] = 0, kn[8] = 0, kn);
    var ln = Number('') || 500,
        mn = {},
        nn = {},
        on = {
            initialized: 11,
            complete: 12,
            interactive: 13
        },
        pn = {},
        qn = Object.freeze((pn[Q.g.Na] = !0, pn)),
        rn = void 0;

    function sn(a, b) {
        if (b.length && pk) {
            var c;
            (c = mn)[a] != null || (c[a] = []);
            nn[a] != null || (nn[a] = []);
            var d = b.filter(function(e) {
                return !nn[a].includes(e)
            });
            mn[a].push.apply(mn[a], ua(d));
            nn[a].push.apply(nn[a], ua(d));
            !rn && d.length > 0 && (il("tdc", !0), rn = B.setTimeout(function() {
                ll();
                mn = {};
                rn = void 0
            }, ln))
        }
    }

    function tn(a, b) {
        var c = {},
            d;
        for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
        for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
        return c
    }

    function un(a, b, c, d) {
        c = c === void 0 ? {} : c;
        d = d === void 0 ? "" : d;
        if (a === b) return [];
        var e = function(r, t) {
                var v;
                Sc(t) === "object" ? v = t[r] : Sc(t) === "array" && (v = t[r]);
                return v === void 0 ? qn[r] : v
            },
            f = tn(a, b),
            g;
        for (g in f)
            if (f.hasOwnProperty(g)) {
                var k = (d ? d + "." : "") + g,
                    m = e(g, a),
                    n = e(g, b),
                    p = Sc(m) === "object" || Sc(m) === "array",
                    q = Sc(n) === "object" || Sc(n) === "array";
                if (p && q) un(m, n, c, k);
                else if (p || q || m !== n) c[k] = !0
            }
        return Object.keys(c)
    }

    function vn() {
        hl("tdc", function() {
            rn && (B.clearTimeout(rn), rn = void 0);
            var a = [],
                b;
            for (b in mn) mn.hasOwnProperty(b) && a.push(b + "*" + mn[b].join("."));
            return a.length ? a.join("!") : void 0
        }, !1)
    };
    var wn = function(a, b, c, d, e, f, g, k, m, n, p) {
            this.eventId = a;
            this.priorityId = b;
            this.j = c;
            this.P = d;
            this.H = e;
            this.K = f;
            this.C = g;
            this.eventMetadata = k;
            this.onSuccess = m;
            this.onFailure = n;
            this.isGtmEvent = p
        },
        xn = function(a, b) {
            var c = [];
            switch (b) {
                case 3:
                    c.push(a.j);
                    c.push(a.P);
                    c.push(a.H);
                    c.push(a.K);
                    c.push(a.C);
                    break;
                case 2:
                    c.push(a.j);
                    break;
                case 1:
                    c.push(a.P);
                    c.push(a.H);
                    c.push(a.K);
                    c.push(a.C);
                    break;
                case 4:
                    c.push(a.j), c.push(a.P), c.push(a.H), c.push(a.K)
            }
            return c
        },
        V = function(a, b, c, d) {
            for (var e = l(xn(a, d === void 0 ? 3 :
                    d)), f = e.next(); !f.done; f = e.next()) {
                var g = f.value;
                if (g[b] !== void 0) return g[b]
            }
            return c
        },
        yn = function(a) {
            for (var b = {}, c = xn(a, 4), d = l(c), e = d.next(); !e.done; e = d.next())
                for (var f = Object.keys(e.value), g = l(f), k = g.next(); !k.done; k = g.next()) b[k.value] = 1;
            return Object.keys(b)
        },
        zn = function(a, b, c) {
            function d(n) {
                Uc(n) && hb(n, function(p, q) {
                    f = !0;
                    e[p] = q
                })
            }
            var e = {},
                f = !1,
                g = xn(a, c === void 0 ? 3 : c);
            g.reverse();
            for (var k = l(g), m = k.next(); !m.done; m = k.next()) d(m.value[b]);
            return f ? e : void 0
        },
        An = function(a) {
            for (var b = [Q.g.jd, Q.g.ed,
                    Q.g.fd, Q.g.gd, Q.g.hd, Q.g.kd, Q.g.ld
                ], c = xn(a, 3), d = l(c), e = d.next(); !e.done; e = d.next()) {
                for (var f = e.value, g = {}, k = !1, m = l(b), n = m.next(); !n.done; n = m.next()) {
                    var p = n.value;
                    f[p] !== void 0 && (g[p] = f[p], k = !0)
                }
                var q = k ? g : void 0;
                if (q) return q
            }
            return {}
        },
        Bn = function(a, b) {
            this.eventId = a;
            this.priorityId = b;
            this.C = {};
            this.P = {};
            this.j = {};
            this.H = {};
            this.X = {};
            this.K = {};
            this.eventMetadata = {};
            this.isGtmEvent = !1;
            this.onSuccess = function() {};
            this.onFailure = function() {}
        },
        Cn = function(a, b) {
            a.C = b;
            return a
        },
        Dn = function(a, b) {
            a.P = b;
            return a
        },
        En = function(a, b) {
            a.j = b;
            return a
        },
        Fn = function(a, b) {
            a.H = b;
            return a
        },
        Gn = function(a, b) {
            a.X = b;
            return a
        },
        Hn = function(a, b) {
            a.K = b;
            return a
        },
        In = function(a, b) {
            a.eventMetadata = b || {};
            return a
        },
        Jn = function(a, b) {
            a.onSuccess = b;
            return a
        },
        Kn = function(a, b) {
            a.onFailure = b;
            return a
        },
        Ln = function(a, b) {
            a.isGtmEvent = b;
            return a
        },
        Mn = function(a) {
            return new wn(a.eventId, a.priorityId, a.C, a.P, a.j, a.H, a.K, a.eventMetadata, a.onSuccess, a.onFailure, a.isGtmEvent)
        };
    var Nn = {},
        On = (Nn[0] = 0, Nn[1] = 0, Nn[2] = 0, Nn[3] = 0, Nn),
        Pn = function(a, b) {
            this.j = a;
            this.consentTypes = b
        };
    Pn.prototype.isConsentGranted = function() {
        switch (this.j) {
            case 0:
                return this.consentTypes.every(function(a) {
                    return zl(a)
                });
            case 1:
                return this.consentTypes.some(function(a) {
                    return zl(a)
                });
            default:
                throw Error("consentsRequired had an unknown type");
        }
    };
    var Qn = {},
        Rn = (Qn[0] = new Pn(0, []), Qn[1] = new Pn(0, ["ad_storage"]), Qn[2] = new Pn(0, ["analytics_storage"]), Qn[3] = new Pn(1, ["ad_storage", "analytics_storage"]), Qn);
    var Tn = function(a) {
        var b = this;
        this.type = a;
        this.j = [];
        Fm(Rn[a].consentTypes, function() {
            Sn(b) || b.flush()
        })
    };
    Tn.prototype.flush = function() {
        for (var a = l(this.j), b = a.next(); !b.done; b = a.next()) {
            var c = b.value;
            c()
        }
        this.j = []
    };
    var Sn = function(a) {
            return On[a.type] === 2 && !Rn[a.type].isConsentGranted()
        },
        Un = function(a, b) {
            Sn(a) ? a.j.push(b) : b()
        },
        Vn = new Map;

    function Wn(a) {
        Vn.has(a) || Vn.set(a, new Tn(a));
        return Vn.get(a)
    };
    var Xn = {
            Uk: Number("5"),
            wo: Number("")
        },
        Yn = [],
        Zn = !1;

    function $n(a) {
        Yn.push(a)
    }
    var ao = "?id=" + Qf.ctid,
        bo = void 0,
        co = {},
        eo = void 0,
        fo = new function() {
            var a = 5;
            Xn.Uk > 0 && (a = Xn.Uk);
            this.C = a;
            this.j = 0;
            this.H = []
        },
        go = 1E3;

    function ho(a, b) {
        var c = bo;
        if (c === void 0)
            if (b) c = Tm();
            else return "";
        for (var d = [gk("https://www.googletagmanager.com"), "/a", ao], e = l(Yn), f = e.next(); !f.done; f = e.next())
            for (var g = f.value, k = g({
                    eventId: c,
                    Xc: !!a
                }), m = l(k), n = m.next(); !n.done; n = m.next()) {
                var p = l(n.value),
                    q = p.next().value,
                    r = p.next().value;
                d.push("&" + q + "=" + r)
            }
        d.push("&z=0");
        return d.join("")
    }

    function io() {
        if (!T(8) || vj.X)
            if (eo && (B.clearTimeout(eo), eo = void 0), bo !== void 0 && jo) {
                if (T(111)) {
                    var a = Wn(3);
                    if (Sn(a)) {
                        Zn || (Zn = !0, Un(a, io));
                        return
                    }
                }
                var b;
                (b = co[bo]) || (b = fo.j < fo.C ? !1 : ob() - fo.H[fo.j % fo.C] < 1E3);
                if (b || go-- <= 0) U(1), co[bo] = !0;
                else {
                    var c = fo.j++ % fo.C;
                    fo.H[c] = ob();
                    var d = ho(!0);
                    sc(d);
                    Zn = jo = !1
                }
            }
    }

    function ko() {
        if (ok && (!T(8) || vj.X)) {
            var a = ho(!0, !0);
            sc(a)
        }
    }
    var jo = !1;

    function lo(a) {
        co[a] || (a !== bo && (io(), bo = a), jo = !0, eo || (eo = B.setTimeout(io, 500)), ho().length >= 2022 && io())
    }
    var mo = db();

    function no() {
        mo = db()
    }

    function oo() {
        return [
            ["v", "3"],
            ["t", "t"],
            ["pid", String(mo)]
        ]
    };
    var po = {};

    function qo(a, b, c) {
        ok && a !== void 0 && (po[a] = po[a] || [], po[a].push(c + b), lo(a))
    }

    function ro(a) {
        var b = a.eventId,
            c = a.Xc,
            d = [],
            e = po[b] || [];
        e.length && d.push(["epr", e.join(".")]);
        c && delete po[b];
        return d
    };

    function so(a, b, c) {
        var d = fn(Jk(a), !0);
        d && to.register(d, b, c)
    }

    function uo(a, b, c, d) {
        var e = fn(c, d.isGtmEvent);
        e && (hj && (d.deferrable = !0), to.push("event", [b, a], e, d))
    }

    function vo(a, b, c, d) {
        var e = fn(c, d.isGtmEvent);
        e && to.push("get", [a, b], e, d)
    }

    function wo(a) {
        var b = fn(Jk(a), !0),
            c;
        b ? c = xo(to, b).j : c = {};
        return c
    }

    function yo(a, b) {
        var c = fn(Jk(a), !0);
        if (c) {
            var d = to,
                e = Vc(b, null);
            Vc(xo(d, c).j, e);
            xo(d, c).j = e
        }
    }
    var zo = function() {
            this.P = {};
            this.j = {};
            this.C = {};
            this.X = null;
            this.K = {};
            this.H = !1;
            this.status = 1
        },
        Ao = function(a, b, c, d) {
            this.C = ob();
            this.j = b;
            this.args = c;
            this.messageContext = d;
            this.type = a
        },
        Bo = function() {
            this.destinations = {};
            this.j = {};
            this.commands = []
        },
        xo = function(a, b) {
            var c = b.destinationId;
            T(137) && !zk && (c = Ok(c));
            return a.destinations[c] = a.destinations[c] || new zo
        },
        Co = function(a, b, c, d) {
            if (d.j) {
                var e = xo(a, d.j),
                    f = e.X;
                if (f) {
                    var g = d.j.id;
                    T(137) && !zk && (g = Ok(g));
                    var k = Vc(c, null),
                        m = Vc(e.P[g], null),
                        n = Vc(e.K, null),
                        p = Vc(e.j, null),
                        q = Vc(a.j, null),
                        r = {};
                    if (ok) try {
                        r = Vc(Cj, null)
                    } catch (y) {
                        U(72)
                    }
                    var t = d.j.prefix,
                        v = function(y) {
                            qo(d.messageContext.eventId, t, y)
                        },
                        u = Mn(Ln(Kn(Jn(In(Gn(Fn(Hn(En(Dn(Cn(new Bn(d.messageContext.eventId, d.messageContext.priorityId), k), m), n), p), q), r), d.messageContext.eventMetadata), function() {
                            if (v) {
                                var y = v;
                                v = void 0;
                                y("2");
                                if (d.messageContext.onSuccess) d.messageContext.onSuccess()
                            }
                        }), function() {
                            if (v) {
                                var y = v;
                                v = void 0;
                                y("3");
                                if (d.messageContext.onFailure) d.messageContext.onFailure()
                            }
                        }), !!d.messageContext.isGtmEvent)),
                        w = function() {
                            try {
                                qo(d.messageContext.eventId, t, "1");
                                var y = d.type,
                                    x = d.j.id;
                                if (pk && y === "config") {
                                    var A, C = (A = fn(x)) == null ? void 0 : A.ids;
                                    if (!(C && C.length > 1)) {
                                        var D, E = hc("google_tag_data", {});
                                        E.td || (E.td = {});
                                        D = E.td;
                                        var I = Vc(u.K);
                                        Vc(u.j, I);
                                        var H = [],
                                            O;
                                        for (O in D) D.hasOwnProperty(O) && un(D[O], I).length && H.push(O);
                                        H.length && (sn(x, H), Va("TAGGING", on[F.readyState] || 14));
                                        D[x] = I
                                    }
                                }
                                f(d.j.id, b, d.C, u)
                            } catch (K) {
                                qo(d.messageContext.eventId, t, "4")
                            }
                        };
                    b === "gtag.get" ? w() : T(111) ? Un(e.qa, w) : w()
                }
            }
        };
    Bo.prototype.register = function(a, b, c) {
        var d = xo(this, a);
        d.status !== 3 && (d.X = b, d.status = 3, T(111) && (d.qa = Wn(c)), this.flush())
    };
    Bo.prototype.push = function(a, b, c, d) {
        c !== void 0 && (xo(this, c).status === 1 && (xo(this, c).status = 2, this.push("require", [{}], c, {})), xo(this, c).H && (d.deferrable = !1));
        this.commands.push(new Ao(a, c, b, d));
        d.deferrable || this.flush()
    };
    Bo.prototype.flush = function(a) {
        for (var b = this, c = [], d = !1, e = {}; this.commands.length; e = {
                Vb: void 0,
                jg: void 0
            }) {
            var f = this.commands[0],
                g = f.j;
            if (f.messageContext.deferrable) !g || xo(this, g).H ? (f.messageContext.deferrable = !1, this.commands.push(f)) : c.push(f), this.commands.shift();
            else {
                switch (f.type) {
                    case "require":
                        if (xo(this, g).status !== 3 && !a) {
                            this.commands.push.apply(this.commands, c);
                            return
                        }
                        break;
                    case "set":
                        var k = f.args[0];
                        hb(k, function(v, u) {
                            Vc(wb(v, u), b.j)
                        });
                        si(k);
                        break;
                    case "config":
                        var m = xo(this, g);
                        e.Vb = {};
                        hb(f.args[0], function(v) {
                            return function(u, w) {
                                Vc(wb(u, w), v.Vb)
                            }
                        }(e));
                        var n = !!e.Vb[Q.g.rc];
                        delete e.Vb[Q.g.rc];
                        var p = g.destinationId === g.id;
                        n || (p ? m.K = {} : m.P[g.id] = {});
                        m.H && n || Co(this, Q.g.ba, e.Vb, f);
                        m.H = !0;
                        p ? Vc(e.Vb, m.K) : (Vc(e.Vb, m.P[g.id]), U(70));
                        d = !0;
                        Ql(e.Vb, g.id);
                        Kl = !0;
                        si(e.Vb);
                        break;
                    case "event":
                        e.jg = {};
                        hb(f.args[0], function(v) {
                            return function(u, w) {
                                Vc(wb(u, w), v.jg)
                            }
                        }(e));
                        Co(this, f.args[1], e.jg, f);
                        var q = void 0;
                        !f.j || ((q = f.messageContext.eventMetadata) == null ? 0 : q.em_event) || (Nl[f.j.id] = !0);
                        Kl = !0;
                        si(e.jg);
                        break;
                    case "get":
                        var r = {},
                            t = (r[Q.g.yb] = f.args[0], r[Q.g.Pb] = f.args[1], r);
                        Co(this, Q.g.Za, t, f);
                        Kl = !0
                }
                this.commands.shift();
                Do(this, f)
            }
        }
        this.commands.push.apply(this.commands, c);
        d && this.flush()
    };
    var Do = function(a, b) {
            if (b.type !== "require")
                if (b.j)
                    for (var c = xo(a, b.j).C[b.type] || [], d = 0; d < c.length; d++) c[d]();
                else
                    for (var e in a.destinations)
                        if (a.destinations.hasOwnProperty(e)) {
                            var f = a.destinations[e];
                            if (f && f.C)
                                for (var g = f.C[b.type] || [], k = 0; k < g.length; k++) g[k]()
                        }
        },
        to = new Bo;
    var Eo = function(a, b) {
            var c = function() {};
            c.prototype = a.prototype;
            var d = new c;
            a.apply(d, Array.prototype.slice.call(arguments, 1));
            return d
        },
        Fo = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = null;
                    c()
                }
            }
        };
    var Go = function(a, b, c) {
            a.addEventListener && a.addEventListener(b, c, !1)
        },
        Ho = function(a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c, !1)
        };
    var Io, Jo;
    a: {
        for (var Ko = ["CLOSURE_FLAGS"], Lo = za, Mo = 0; Mo < Ko.length; Mo++)
            if (Lo = Lo[Ko[Mo]], Lo == null) {
                Jo = null;
                break a
            }
        Jo = Lo
    }
    var No = Jo && Jo[610401301];
    Io = No != null ? No : !1;

    function Oo() {
        var a = za.navigator;
        if (a) {
            var b = a.userAgent;
            if (b) return b
        }
        return ""
    }
    var Po, Qo = za.navigator;
    Po = Qo ? Qo.userAgentData || null : null;

    function Ro(a) {
        return Io ? Po ? Po.brands.some(function(b) {
            var c;
            return (c = b.brand) && c.indexOf(a) != -1
        }) : !1 : !1
    }

    function So(a) {
        return Oo().indexOf(a) != -1
    };

    function To() {
        return Io ? !!Po && Po.brands.length > 0 : !1
    }

    function Uo() {
        return To() ? !1 : So("Opera")
    }

    function Vo() {
        return So("Firefox") || So("FxiOS")
    }

    function Wo() {
        return To() ? Ro("Chromium") : (So("Chrome") || So("CriOS")) && !(To() ? 0 : So("Edge")) || So("Silk")
    };
    var Xo = function(a) {
        Xo[" "](a);
        return a
    };
    Xo[" "] = function() {};
    var Yo = function(a, b, c, d) {
            for (var e = b, f = c.length;
                (e = a.indexOf(c, e)) >= 0 && e < d;) {
                var g = a.charCodeAt(e - 1);
                if (g == 38 || g == 63) {
                    var k = a.charCodeAt(e + f);
                    if (!k || k == 61 || k == 38 || k == 35) return e
                }
                e += f + 1
            }
            return -1
        },
        Zo = /#|$/,
        $o = function(a, b) {
            var c = a.search(Zo),
                d = Yo(a, 0, b, c);
            if (d < 0) return null;
            var e = a.indexOf("&", d);
            if (e < 0 || e > c) e = c;
            d += b.length + 1;
            return decodeURIComponent(a.slice(d, e !== -1 ? e : 0).replace(/\+/g, " "))
        },
        ap = /[?&]($|#)/,
        bp = function(a, b, c) {
            for (var d, e = a.search(Zo), f = 0, g, k = [];
                (g = Yo(a, f, b, e)) >= 0;) k.push(a.substring(f,
                g)), f = Math.min(a.indexOf("&", g) + 1 || e, e);
            k.push(a.slice(f));
            d = k.join("").replace(ap, "$1");
            var m, n = c != null ? "=" + encodeURIComponent(String(c)) : "";
            var p = b + n;
            if (p) {
                var q, r = d.indexOf("#");
                r < 0 && (r = d.length);
                var t = d.indexOf("?"),
                    v;
                t < 0 || t > r ? (t = r, v = "") : v = d.substring(t + 1, r);
                q = [d.slice(0, t), v, d.slice(r)];
                var u = q[1];
                q[1] = p ? u ? u + "&" + p : p : u;
                m = q[0] + (q[1] ? "?" + q[1] : "") + q[2]
            } else m = d;
            return m
        };

    function cp() {
        return Io ? !!Po && !!Po.platform : !1
    }

    function dp() {
        return So("iPhone") && !So("iPod") && !So("iPad")
    }

    function ep() {
        dp() || So("iPad") || So("iPod")
    };
    Uo();
    To() || So("Trident") || So("MSIE");
    So("Edge");
    !So("Gecko") || Oo().toLowerCase().indexOf("webkit") != -1 && !So("Edge") || So("Trident") || So("MSIE") || So("Edge");
    Oo().toLowerCase().indexOf("webkit") != -1 && !So("Edge") && So("Mobile");
    cp() || So("Macintosh");
    cp() || So("Windows");
    (cp() ? Po.platform === "Linux" : So("Linux")) || cp() || So("CrOS");
    cp() || So("Android");
    dp();
    So("iPad");
    So("iPod");
    ep();
    Oo().toLowerCase().indexOf("kaios");
    var fp = function(a) {
            try {
                var b;
                if (b = !!a && a.location.href != null) a: {
                    try {
                        Xo(a.foo);
                        b = !0;
                        break a
                    } catch (c) {}
                    b = !1
                }
                return b
            } catch (c) {
                return !1
            }
        },
        gp = function(a, b) {
            if (a)
                for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
        },
        hp = function(a) {
            if (B.top == B) return 0;
            if (a === void 0 ? 0 : a) {
                var b = B.location.ancestorOrigins;
                if (b) return b[b.length - 1] == B.location.origin ? 1 : 2
            }
            return fp(B.top) ? 1 : 2
        },
        ip = function(a) {
            a = a === void 0 ? document : a;
            return a.createElement("img")
        },
        jp = function() {
            for (var a = B, b = a; a && a != a.parent;) a =
                a.parent, fp(a) && (b = a);
            return b
        };

    function kp(a, b, c, d) {
        d = d === void 0 ? !1 : d;
        a.google_image_requests || (a.google_image_requests = []);
        var e = ip(a.document);
        if (c) {
            var f = function() {
                if (c) {
                    var g = a.google_image_requests,
                        k = ac(g, e);
                    k >= 0 && Array.prototype.splice.call(g, k, 1)
                }
                Ho(e, "load", f);
                Ho(e, "error", f)
            };
            Go(e, "load", f);
            Go(e, "error", f)
        }
        d && (e.attributionSrc = "");
        e.src = b;
        a.google_image_requests.push(e)
    }
    var mp = function(a) {
            var b;
            b = b === void 0 ? !1 : b;
            var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
            gp(a, function(d, e) {
                if (d || d === 0) c += "&" + e + "=" + encodeURIComponent("" + d)
            });
            lp(c, b)
        },
        lp = function(a, b) {
            var c = window,
                d;
            b = b === void 0 ? !1 : b;
            d = d === void 0 ? !1 : d;
            if (c.fetch) {
                var e = {
                    keepalive: !0,
                    credentials: "include",
                    redirect: "follow",
                    method: "get",
                    mode: "no-cors"
                };
                d && (e.mode = "cors", "setAttributionReporting" in XMLHttpRequest.prototype ? e.attributionReporting = {
                        eventSourceEligible: "true",
                        triggerEligible: "false"
                    } :
                    e.headers = {
                        "Attribution-Reporting-Eligible": "event-source"
                    });
                c.fetch(a, e)
            } else kp(c, a, b === void 0 ? !1 : b, d === void 0 ? !1 : d)
        };
    var op = function() {
        this.P = this.P;
        this.C = this.C
    };
    op.prototype.P = !1;
    op.prototype.dispose = function() {
        this.P || (this.P = !0, this.qa())
    };
    op.prototype[Symbol.dispose] = function() {
        this.dispose()
    };
    op.prototype.addOnDisposeCallback = function(a, b) {
        this.P ? b !== void 0 ? a.call(b) : a() : (this.C || (this.C = []), b && (a = a.bind(b)), this.C.push(a))
    };
    op.prototype.qa = function() {
        if (this.C)
            for (; this.C.length;) this.C.shift()()
    };

    function pp(a) {
        a.addtlConsent !== void 0 && typeof a.addtlConsent !== "string" && (a.addtlConsent = void 0);
        a.gdprApplies !== void 0 && typeof a.gdprApplies !== "boolean" && (a.gdprApplies = void 0);
        return a.tcString !== void 0 && typeof a.tcString !== "string" || a.listenerId !== void 0 && typeof a.listenerId !== "number" ? 2 : a.cmpStatus && a.cmpStatus !== "error" ? 0 : 3
    }
    var qp = function(a, b) {
        b = b === void 0 ? {} : b;
        op.call(this);
        this.j = null;
        this.X = {};
        this.eg = 0;
        this.K = null;
        this.H = a;
        var c;
        this.sc = (c = b.Dn) != null ? c : 500;
        var d;
        this.fb = (d = b.mo) != null ? d : !1
    };
    sa(qp, op);
    qp.prototype.qa = function() {
        this.X = {};
        this.K && (Ho(this.H, "message", this.K), delete this.K);
        delete this.X;
        delete this.H;
        delete this.j;
        op.prototype.qa.call(this)
    };
    var sp = function(a) {
        return typeof a.H.__tcfapi === "function" || rp(a) != null
    };
    qp.prototype.addEventListener = function(a) {
        var b = this,
            c = {
                internalBlockOnErrors: this.fb
            },
            d = Fo(function() {
                return a(c)
            }),
            e = 0;
        this.sc !== -1 && (e = setTimeout(function() {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, this.sc));
        var f = function(g, k) {
            clearTimeout(e);
            g ? (c = g, c.internalErrorState = pp(c), c.internalBlockOnErrors = b.fb, k && c.internalErrorState === 0 || (c.tcString = "tcunavailable", k || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
            a(c)
        };
        try {
            tp(this, "addEventListener", f)
        } catch (g) {
            c.tcString =
                "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e), e = 0), d()
        }
    };
    qp.prototype.removeEventListener = function(a) {
        a && a.listenerId && tp(this, "removeEventListener", null, a.listenerId)
    };
    var vp = function(a, b, c) {
            var d;
            d = d === void 0 ? "755" : d;
            var e;
            a: {
                if (a.publisher && a.publisher.restrictions) {
                    var f = a.publisher.restrictions[b];
                    if (f !== void 0) {
                        e = f[d === void 0 ? "755" : d];
                        break a
                    }
                }
                e = void 0
            }
            var g = e;
            if (g === 0) return !1;
            var k = c;
            c === 2 ? (k = 0, g === 2 && (k = 1)) : c === 3 && (k = 1, g === 1 && (k = 0));
            var m;
            if (k === 0)
                if (a.purpose && a.vendor) {
                    var n = up(a.vendor.consents, d === void 0 ? "755" : d);
                    m = n && b === "1" && a.purposeOneTreatment && a.publisherCC === "CH" ? !0 : n && up(a.purpose.consents, b)
                } else m = !0;
            else m = k === 1 ? a.purpose && a.vendor ? up(a.purpose.legitimateInterests,
                b) && up(a.vendor.legitimateInterests, d === void 0 ? "755" : d) : !0 : !0;
            return m
        },
        up = function(a, b) {
            return !(!a || !a[b])
        },
        tp = function(a, b, c, d) {
            c || (c = function() {});
            var e = a.H;
            if (typeof e.__tcfapi === "function") {
                var f = e.__tcfapi;
                f(b, 2, c, d)
            } else if (rp(a)) {
                wp(a);
                var g = ++a.eg;
                a.X[g] = c;
                if (a.j) {
                    var k = {};
                    a.j.postMessage((k.__tcfapiCall = {
                        command: b,
                        version: 2,
                        callId: g,
                        parameter: d
                    }, k), "*")
                }
            } else c({}, !1)
        },
        rp = function(a) {
            if (a.j) return a.j;
            var b;
            a: {
                for (var c = a.H, d = 0; d < 50; ++d) {
                    var e;
                    try {
                        e = !(!c.frames || !c.frames.__tcfapiLocator)
                    } catch (k) {
                        e = !1
                    }
                    if (e) {
                        b = c;
                        break a
                    }
                    var f;
                    b: {
                        try {
                            var g = c.parent;
                            if (g && g != c) {
                                f = g;
                                break b
                            }
                        } catch (k) {}
                        f = null
                    }
                    if (!(c = f)) break
                }
                b = null
            }
            a.j = b;
            return a.j
        },
        wp = function(a) {
            if (!a.K) {
                var b = function(c) {
                    try {
                        var d;
                        d = (typeof c.data === "string" ? JSON.parse(c.data) : c.data).__tcfapiReturn;
                        a.X[d.callId](d.returnValue, d.success)
                    } catch (e) {}
                };
                a.K = b;
                Go(a.H, "message", b)
            }
        },
        xp = function(a) {
            if (a.gdprApplies === !1) return !0;
            a.internalErrorState === void 0 && (a.internalErrorState = pp(a));
            return a.cmpStatus === "error" || a.internalErrorState !== 0 ? a.internalBlockOnErrors ?
                (mp({
                    e: String(a.internalErrorState)
                }), !1) : !0 : a.cmpStatus !== "loaded" || a.eventStatus !== "tcloaded" && a.eventStatus !== "useractioncomplete" ? !1 : !0
        };
    var yp = {
        1: 0,
        3: 0,
        4: 0,
        7: 3,
        9: 3,
        10: 3
    };

    function zp() {
        return Pm("tcf", function() {
            return {}
        })
    }
    var Ap = function() {
        return new qp(B, {
            Dn: -1
        })
    };

    function Bp() {
        var a = zp(),
            b = Ap();
        sp(b) && !Cp() && !Dp() && U(124);
        if (!a.active && sp(b)) {
            Cp() && (a.active = !0, a.purposes = {}, a.cmpId = 0, a.tcfPolicyVersion = 0, rl().active = !0, a.tcString = "tcunavailable");
            Im();
            try {
                b.addEventListener(function(c) {
                    if (c.internalErrorState !== 0) Ep(a), Jm([Q.g.N, Q.g.sa, Q.g.O]), rl().active = !0;
                    else if (a.gdprApplies = c.gdprApplies, a.cmpId = c.cmpId, a.enableAdvertiserConsentMode = c.enableAdvertiserConsentMode, Dp() && (a.active = !0), !Fp(c) || Cp() || Dp()) {
                        a.tcfPolicyVersion = c.tcfPolicyVersion;
                        var d;
                        if (c.gdprApplies ===
                            !1) {
                            var e = {},
                                f;
                            for (f in yp) yp.hasOwnProperty(f) && (e[f] = !0);
                            d = e;
                            b.removeEventListener(c)
                        } else if (Fp(c)) {
                            var g = {},
                                k;
                            for (k in yp)
                                if (yp.hasOwnProperty(k))
                                    if (k === "1") {
                                        var m, n = c,
                                            p = {
                                                tm: !0
                                            };
                                        p = p === void 0 ? {} : p;
                                        m = xp(n) ? n.gdprApplies === !1 ? !0 : n.tcString === "tcunavailable" ? !p.uk : (p.uk || n.gdprApplies !== void 0 || p.tm) && (p.uk || typeof n.tcString === "string" && n.tcString.length) ? vp(n, "1", 0) : !0 : !1;
                                        g["1"] = m
                                    } else g[k] = vp(c, k, yp[k]);
                            d = g
                        }
                        if (d) {
                            a.tcString = c.tcString || "tcempty";
                            a.purposes = d;
                            var q = {},
                                r = (q[Q.g.N] = a.purposes["1"] ?
                                    "granted" : "denied", q);
                            a.gdprApplies !== !0 ? (Jm([Q.g.N, Q.g.sa, Q.g.O]), rl().active = !0) : (r[Q.g.sa] = a.purposes["3"] && a.purposes["4"] ? "granted" : "denied", typeof a.tcfPolicyVersion === "number" && a.tcfPolicyVersion >= 4 ? r[Q.g.O] = a.purposes["1"] && a.purposes["7"] ? "granted" : "denied" : Jm([Q.g.O]), Dm(r, {
                                eventId: 0
                            }, {
                                gdprApplies: a ? a.gdprApplies : void 0,
                                tcString: Gp() || ""
                            }))
                        }
                    } else Jm([Q.g.N, Q.g.sa, Q.g.O])
                })
            } catch (c) {
                Ep(a), Jm([Q.g.N, Q.g.sa, Q.g.O]), rl().active = !0
            }
        }
    }

    function Ep(a) {
        a.type = "e";
        a.tcString = "tcunavailable"
    }

    function Fp(a) {
        return a.eventStatus === "tcloaded" || a.eventStatus === "useractioncomplete" || a.eventStatus === "cmpuishown"
    }

    function Cp() {
        return B.gtag_enable_tcf_support === !0
    }

    function Dp() {
        return zp().enableAdvertiserConsentMode === !0
    }

    function Gp() {
        var a = zp();
        if (a.active) return a.tcString
    }

    function Hp() {
        var a = zp();
        if (a.active && a.gdprApplies !== void 0) return a.gdprApplies ? "1" : "0"
    }

    function Ip(a) {
        if (!yp.hasOwnProperty(String(a))) return !0;
        var b = zp();
        return b.active && b.purposes ? !!b.purposes[String(a)] : !0
    };
    var Jp = [Q.g.N, Q.g.R, Q.g.O, Q.g.sa],
        Kp = {},
        Lp = (Kp[Q.g.N] = 1, Kp[Q.g.R] = 2, Kp);

    function Mp(a) {
        if (a === void 0) return 0;
        switch (V(a, Q.g.la)) {
            case void 0:
                return 1;
            case !1:
                return 3;
            default:
                return 2
        }
    }

    function Np(a) {
        if (Wl() === "US-CO" && dc.globalPrivacyControl === !0) return !1;
        var b = Mp(a);
        if (b === 3) return !1;
        switch (Al(Q.g.sa)) {
            case 1:
            case 3:
                return !0;
            case 2:
                return !1;
            case 4:
                return b === 2;
            case 0:
                return !0;
            default:
                return !1
        }
    }

    function Op() {
        return Dl() || !zl(Q.g.N) || !zl(Q.g.R)
    }

    function Pp() {
        var a = {},
            b;
        for (b in Lp) Lp.hasOwnProperty(b) && (a[Lp[b]] = Al(b));
        return "G1" + Ie(a[1] || 0) + Ie(a[2] || 0)
    }
    var Qp = {},
        Rp = (Qp[Q.g.N] = 0, Qp[Q.g.R] = 1, Qp[Q.g.O] = 2, Qp[Q.g.sa] = 3, Qp);

    function Sp(a) {
        switch (a) {
            case void 0:
                return 1;
            case !0:
                return 3;
            case !1:
                return 2;
            default:
                return 0
        }
    }

    function Tp(a) {
        for (var b = "1", c = 0; c < Jp.length; c++) {
            var d = b,
                e, f = Jp[c],
                g = yl.delegatedConsentTypes[f];
            e = g === void 0 ? 0 : Rp.hasOwnProperty(g) ? 12 | Rp[g] : 8;
            var k = rl();
            k.accessedAny = !0;
            var m = k.entries[f] || {};
            e = e << 2 | Sp(m.implicit);
            b = d + ("" + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [e] + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [Sp(m.declare) << 4 | Sp(m.default) << 2 | Sp(m.update)])
        }
        var n = b,
            p = (Wl() === "US-CO" && dc.globalPrivacyControl === !0 ? 1 : 0) << 3,
            q = (Dl() ? 1 : 0) << 2,
            r = Mp(a);
        b =
            n + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [p | q | r];
        return b += "" + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [yl.containerScopedDefaults.ad_storage << 4 | yl.containerScopedDefaults.analytics_storage << 2 | yl.containerScopedDefaults.ad_user_data] + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [(yl.usedContainerScopedDefaults ? 1 : 0) << 2 | yl.containerScopedDefaults.ad_personalization]
    }

    function Up() {
        if (!zl(Q.g.O)) return "-";
        for (var a = Object.keys(Oh), b = Bl(a), c = "", d = l(a), e = d.next(); !e.done; e = d.next()) {
            var f = e.value;
            b[f] && (c += Oh[f])
        }(yl.usedCorePlatformServices ? yl.selectedAllCorePlatformServices : 1) && (c += "o");
        return c || "-"
    }

    function Vp() {
        return Yl() || (Cp() || Dp()) && Hp() === "1" ? "1" : "0"
    }

    function Wp() {
        return (Yl() ? !0 : !(!Cp() && !Dp()) && Hp() === "1") || !zl(Q.g.O)
    }

    function Xp() {
        var a = "0",
            b = "0",
            c;
        var d = zp();
        c = d.active ? d.cmpId : void 0;
        typeof c === "number" && c >= 0 && c <= 4095 && (a = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [c >> 6 & 63], b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [c & 63]);
        var e = "0",
            f;
        var g = zp();
        f = g.active ? g.tcfPolicyVersion : void 0;
        typeof f === "number" && f >= 0 && f <= 63 && (e = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [f]);
        var k = 0;
        Yl() && (k |= 1);
        Hp() === "1" && (k |= 2);
        Cp() && (k |= 4);
        var m;
        var n = zp();
        m = n.enableAdvertiserConsentMode !==
            void 0 ? n.enableAdvertiserConsentMode ? "1" : "0" : void 0;
        m === "1" && (k |= 8);
        rl().waitPeriodTimedOut && (k |= 16);
        return "1" + a + b + e + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [k]
    }

    function Yp() {
        return Wl() === "US-CO"
    };

    function Zp() {
        var a = !1;
        return a
    };
    var $p = {
        UA: 1,
        AW: 2,
        DC: 3,
        G: 4,
        GF: 5,
        GT: 12,
        GTM: 14,
        HA: 6,
        MC: 7
    };

    function aq(a) {
        a = a === void 0 ? {} : a;
        var b = Qf.ctid.split("-")[0].toUpperCase(),
            c = {
                ctid: Qf.ctid,
                sn: cj.Je,
                un: cj.xh,
                Vm: yk.Ge ? 2 : 1,
                zn: a.Lk,
                Qe: Qf.canonicalContainerId
            };
        c.Qe !== a.za && (c.za = a.za);
        var d = Lk();
        c.jn = d ? d.canonicalContainerId : void 0;
        ij ? (c.sg = $p[b], c.sg || (c.sg = 0)) : c.sg = mj ? 13 : 10;
        vj.j ? (c.qg = 0, c.Wl = 2) : kj ? c.qg = 1 : Zp() ? c.qg = 2 : c.qg = 3;
        var e = {};
        e[6] = zk;
        vj.C === 2 ? e[7] = !0 : vj.C === 1 && (e[2] = !0);
        if (gc) {
            var f = Sj(Yj(gc), "host");
            f && (e[8] = f.match(/^(www\.)?googletagmanager\.com$/) === null)
        }
        c.Zl = e;
        var g = a.gg,
            k;
        var m = c.sg,
            n = c.qg;
        m === void 0 ? k = "" : (n || (n = 0), k = "" + Ke(1, 1) + He(m << 2 | n));
        var p = c.Wl,
            q = "4" + k + (p ? "" + Ke(2, 1) + He(p) : ""),
            r, t = c.un;
        r = t && Je.test(t) ? "" + Ke(3, 2) + t : "";
        var v, u = c.sn;
        v = u ? "" + Ke(4, 1) + He(u) : "";
        var w;
        var y = c.ctid;
        if (y && g) {
            var x = y.split("-"),
                A = x[0].toUpperCase();
            if (A !== "GTM" && A !== "OPT") w = "";
            else {
                var C = x[1];
                w = "" + Ke(5, 3) + He(1 + C.length) + (c.Vm || 0) + C
            }
        } else w = "";
        var D = c.zn,
            E = c.Qe,
            I = c.za,
            H = c.uo,
            O = q + r + v + w + (D ? "" + Ke(6, 1) + He(D) : "") + (E ? "" + Ke(7, 3) + He(E.length) + E : "") + (I ? "" + Ke(8, 3) + He(I.length) + I : "") + (H ? "" + Ke(9, 3) + He(H.length) +
                H : ""),
            K;
        var Z = c.Zl;
        Z = Z === void 0 ? {} : Z;
        for (var ca = [], ba = l(Object.keys(Z)), aa = ba.next(); !aa.done; aa = ba.next()) {
            var P = aa.value;
            ca[Number(P)] = Z[P]
        }
        if (ca.length) {
            var ma = Ke(10, 3),
                ja;
            if (ca.length === 0) ja = He(0);
            else {
                for (var ka = [], Ga = 0, Xa = !1, Da = 0; Da < ca.length; Da++) {
                    Xa = !0;
                    var Sa = Da % 6;
                    ca[Da] && (Ga |= 1 << Sa);
                    Sa === 5 && (ka.push(He(Ga)), Ga = 0, Xa = !1)
                }
                Xa && ka.push(He(Ga));
                ja = ka.join("")
            }
            var gb = ja;
            K = "" + ma + He(gb.length) + gb
        } else K = "";
        var qc = c.jn;
        return O + K + (qc ? "" + Ke(11, 3) + He(qc.length) + qc : "")
    };

    function bq(a) {
        var b = 1,
            c, d, e;
        if (a)
            for (b = 0, d = a.length - 1; d >= 0; d--) e = a.charCodeAt(d), b = (b << 6 & 268435455) + e + (e << 14), c = b & 266338304, b = c !== 0 ? b ^ c >> 21 : b;
        return b
    };

    function cq(a) {
        return a.origin !== "null"
    };

    function dq(a, b, c, d) {
        var e;
        if (eq(d)) {
            for (var f = [], g = String(b || fq()).split(";"), k = 0; k < g.length; k++) {
                var m = g[k].split("="),
                    n = m[0].replace(/^\s*|\s*$/g, "");
                if (n && n === a) {
                    var p = m.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                    p && c && (p = decodeURIComponent(p));
                    f.push(p)
                }
            }
            e = f
        } else e = [];
        return e
    }

    function gq(a, b, c, d, e) {
        if (eq(e)) {
            var f = hq(a, d, e);
            if (f.length === 1) return f[0].id;
            if (f.length !== 0) {
                f = iq(f, function(g) {
                    return g.hm
                }, b);
                if (f.length === 1) return f[0].id;
                f = iq(f, function(g) {
                    return g.ln
                }, c);
                return f[0] ? f[0].id : void 0
            }
        }
    }

    function jq(a, b, c, d) {
        var e = fq(),
            f = window;
        cq(f) && (f.document.cookie = a);
        var g = fq();
        return e !== g || c !== void 0 && dq(b, g, !1, d).indexOf(c) >= 0
    }

    function kq(a, b, c, d) {
        function e(w, y, x) {
            if (x == null) return delete k[y], w;
            k[y] = x;
            return w + "; " + y + "=" + x
        }

        function f(w, y) {
            if (y == null) return w;
            k[y] = !0;
            return w + "; " + y
        }
        if (!eq(c.Jb)) return 2;
        var g;
        b == null ? g = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = lq(b), g = a + "=" + b);
        var k = {};
        g = e(g, "path", c.path);
        var m;
        c.expires instanceof Date ? m = c.expires.toUTCString() : c.expires != null && (m = "" + c.expires);
        g = e(g, "expires", m);
        g = e(g, "max-age", c.Zm);
        g = e(g, "samesite", c.vn);
        c.secure &&
            (g = f(g, "secure"));
        var n = c.domain;
        if (n && n.toLowerCase() === "auto") {
            for (var p = mq(), q = void 0, r = !1, t = 0; t < p.length; ++t) {
                var v = p[t] !== "none" ? p[t] : void 0,
                    u = e(g, "domain", v);
                u = f(u, c.flags);
                try {
                    d && d(a, k)
                } catch (w) {
                    q = w;
                    continue
                }
                r = !0;
                if (!nq(v, c.path) && jq(u, a, b, c.Jb)) return 0
            }
            if (q && !r) throw q;
            return 1
        }
        n && n.toLowerCase() !== "none" && (g = e(g, "domain", n));
        g = f(g, c.flags);
        d && d(a, k);
        return nq(n, c.path) ? 1 : jq(g, a, b, c.Jb) ? 0 : 1
    }

    function oq(a, b, c) {
        c.path == null && (c.path = "/");
        c.domain || (c.domain = "auto");
        return kq(a, b, c)
    }

    function iq(a, b, c) {
        for (var d = [], e = [], f, g = 0; g < a.length; g++) {
            var k = a[g],
                m = b(k);
            m === c ? d.push(k) : f === void 0 || m < f ? (e = [k], f = m) : m === f && e.push(k)
        }
        return d.length > 0 ? d : e
    }

    function hq(a, b, c) {
        for (var d = [], e = dq(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var g = e[f].split("."),
                k = g.shift();
            if (!b || !k || b.indexOf(k) !== -1) {
                var m = g.shift();
                if (m) {
                    var n = m.split("-");
                    d.push({
                        id: g.join("."),
                        hm: Number(n[0]) || 1,
                        ln: Number(n[1]) || 1
                    })
                }
            }
        }
        return d
    }

    function lq(a) {
        a && a.length > 1200 && (a = a.substring(0, 1200));
        return a
    }
    var pq = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        qq = /(^|\.)doubleclick\.net$/i;

    function nq(a, b) {
        return a !== void 0 && (qq.test(window.document.location.hostname) || b === "/" && pq.test(a))
    }

    function rq(a) {
        if (!a) return 1;
        var b = a;
        ki(7) && a === "none" && (b = window.document.location.hostname);
        b = b.indexOf(".") === 0 ? b.substring(1) : b;
        return b.split(".").length
    }

    function sq(a) {
        if (!a || a === "/") return 1;
        a[0] !== "/" && (a = "/" + a);
        a[a.length - 1] !== "/" && (a += "/");
        return a.split("/").length - 1
    }

    function tq(a, b) {
        var c = "" + rq(a),
            d = sq(b);
        d > 1 && (c += "-" + d);
        return c
    }
    var fq = function() {
            return cq(window) ? window.document.cookie : ""
        },
        eq = function(a) {
            return a && ki(8) ? (Array.isArray(a) ? a : [a]).every(function(b) {
                return Cl(b) && zl(b)
            }) : !0
        },
        mq = function() {
            var a = [],
                b = window.document.location.hostname.split(".");
            if (b.length === 4) {
                var c = b[b.length - 1];
                if (Number(c).toString() === c) return ["none"]
            }
            for (var d = b.length - 2; d >= 0; d--) a.push(b.slice(d).join("."));
            var e = window.document.location.hostname;
            qq.test(e) || pq.test(e) || a.push("none");
            return a
        };

    function uq(a) {
        var b = Math.round(Math.random() * 2147483647);
        return a ? String(b ^ bq(a) & 2147483647) : String(b)
    }

    function vq(a) {
        return [uq(a), Math.round(ob() / 1E3)].join(".")
    }

    function wq(a, b, c, d, e) {
        var f = rq(b);
        return gq(a, f, sq(c), d, e)
    }

    function xq(a, b, c, d) {
        return [b, tq(c, d), a].join(".")
    };

    function yq(a, b, c, d) {
        var e, f = Number(a.Ib != null ? a.Ib : void 0);
        f !== 0 && (e = new Date((b || ob()) + 1E3 * (f || 7776E3)));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !!c,
            expires: e,
            Jb: d
        }
    };
    var zq = ["ad_storage", "ad_user_data"];

    function Aq(a, b) {
        if (!a) return 10;
        if (b === null || b === void 0 || b === "") return 11;
        var c = Bq(!1);
        if (c.error !== 0) return c.error;
        if (!c.value) return 2;
        c.value[a] = b;
        return Cq(c)
    }

    function Dq(a) {
        if (!a) return {
            error: 10
        };
        var b = Bq();
        if (b.error !== 0) return b;
        if (!b.value) return {
            error: 2
        };
        if (!(a in b.value)) return {
            value: void 0,
            error: 15
        };
        var c = b.value[a];
        return c === null || c === void 0 || c === "" ? {
            value: void 0,
            error: 11
        } : {
            value: c,
            error: 0
        }
    }

    function Bq(a) {
        a = a === void 0 ? !0 : a;
        if (!zl(zq)) return {
            error: 3
        };
        try {
            if (!B.localStorage) return {
                error: 1
            }
        } catch (f) {
            return {
                error: 14
            }
        }
        var b = {
                schema: "gcl",
                version: 1
            },
            c = void 0;
        try {
            c = B.localStorage.getItem("_gcl_ls")
        } catch (f) {
            return {
                error: 13
            }
        }
        try {
            if (c) {
                var d = JSON.parse(c);
                if (d && typeof d === "object") b = d;
                else return {
                    error: 12
                }
            }
        } catch (f) {
            return {
                error: 8
            }
        }
        if (b.schema !== "gcl") return {
            error: 4
        };
        if (b.version !== 1) return {
            error: 5
        };
        try {
            var e = Eq(b);
            a && e && Cq({
                value: b,
                error: 0
            })
        } catch (f) {
            return {
                error: 8
            }
        }
        return {
            value: b,
            error: 0
        }
    }

    function Eq(a) {
        if (!a || typeof a !== "object") return !1;
        if ("expires" in a && "value" in a) {
            var b;
            typeof a.expires === "number" ? b = a.expires : b = typeof a.expires === "string" ? Number(a.expires) : NaN;
            if (isNaN(b) || !(Date.now() <= b)) return a.value = null, a.error = 9, !0
        } else {
            for (var c = !1, d = l(Object.keys(a)), e = d.next(); !e.done; e = d.next()) c = Eq(a[e.value]) || c;
            return c
        }
        return !1
    }

    function Cq(a) {
        if (a.error) return a.error;
        if (!a.value) return 2;
        var b = a.value,
            c;
        try {
            c = JSON.stringify(b)
        } catch (d) {
            return 6
        }
        try {
            B.localStorage.setItem("_gcl_ls", c)
        } catch (d) {
            return 7
        }
        return 0
    };

    function Fq() {
        if (!Gq()) return -1;
        var a = Hq();
        return a !== -1 && Iq(a + 1) ? a + 1 : -1
    }

    function Hq() {
        if (!Gq()) return -1;
        var a = Dq("gcl_ctr");
        if (!a || a.error !== 0 || !a.value || typeof a.value !== "object") return -1;
        var b = a.value;
        try {
            if (!("value" in b && b.value) || typeof b.value !== "object") return -1;
            var c = b.value.value;
            return c == null || Number.isNaN(c) ? -1 : Number(c)
        } catch (d) {
            return -1
        }
    }

    function Gq() {
        return zl(["ad_storage", "ad_user_data"]) ? ki(11) : !1
    }

    function Iq(a, b) {
        b = b || {};
        var c = ob();
        return Aq("gcl_ctr", {
            value: {
                value: a,
                creationTimeMs: c
            },
            expires: Number(yq(b, c, !0).expires)
        }) === 0 ? !0 : !1
    };
    var Jq;

    function Kq() {
        function a(g) {
            c(g.target || g.srcElement || {})
        }

        function b(g) {
            d(g.target || g.srcElement || {})
        }
        var c = Lq,
            d = Mq,
            e = Nq();
        if (!e.init) {
            tc(F, "mousedown", a);
            tc(F, "keyup", a);
            tc(F, "submit", b);
            var f = HTMLFormElement.prototype.submit;
            HTMLFormElement.prototype.submit = function() {
                d(this);
                f.call(this)
            };
            e.init = !0
        }
    }

    function Oq(a, b, c, d, e) {
        var f = {
            callback: a,
            domains: b,
            fragment: c === 2,
            placement: c,
            forms: d,
            sameHost: e
        };
        Nq().decorators.push(f)
    }

    function Pq(a, b, c) {
        for (var d = Nq().decorators, e = {}, f = 0; f < d.length; ++f) {
            var g = d[f],
                k;
            if (k = !c || g.forms) a: {
                var m = g.domains,
                    n = a,
                    p = !!g.sameHost;
                if (m && (p || n !== F.location.hostname))
                    for (var q = 0; q < m.length; q++)
                        if (m[q] instanceof RegExp) {
                            if (m[q].test(n)) {
                                k = !0;
                                break a
                            }
                        } else if (n.indexOf(m[q]) >= 0 || p && m[q].indexOf(n) >= 0) {
                    k = !0;
                    break a
                }
                k = !1
            }
            if (k) {
                var r = g.placement;
                r === void 0 && (r = g.fragment ? 2 : 1);
                r === b && rb(e, g.callback())
            }
        }
        return e
    }

    function Nq() {
        var a = hc("google_tag_data", {}),
            b = a.gl;
        b && b.decorators || (b = {
            decorators: []
        }, a.gl = b);
        return b
    };
    var Qq = /(.*?)\*(.*?)\*(.*)/,
        Rq = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
        Sq = /^(?:www\.|m\.|amp\.)+/,
        Tq = /([^?#]+)(\?[^#]*)?(#.*)?/;

    function Uq(a) {
        var b = Tq.exec(a);
        if (b) return {
            ji: b[1],
            query: b[2],
            fragment: b[3]
        }
    }

    function Vq(a) {
        return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")
    }

    function Wq(a, b) {
        var c = [dc.userAgent, (new Date).getTimezoneOffset(), dc.userLanguage || dc.language, Math.floor(ob() / 60 / 1E3) - (b === void 0 ? 0 : b), a].join("*"),
            d;
        if (!(d = Jq)) {
            for (var e = Array(256), f = 0; f < 256; f++) {
                for (var g = f, k = 0; k < 8; k++) g = g & 1 ? g >>> 1 ^ 3988292384 : g >>> 1;
                e[f] = g
            }
            d = e
        }
        Jq = d;
        for (var m = 4294967295, n = 0; n < c.length; n++) m = m >>> 8 ^ Jq[(m ^ c.charCodeAt(n)) & 255];
        return ((m ^ -1) >>> 0).toString(36)
    }

    function Xq(a) {
        return function(b) {
            var c = Yj(B.location.href),
                d = c.search.replace("?", ""),
                e = Rj(d, "_gl", !1, !0) || "";
            b.query = Yq(e) || {};
            var f = Sj(c, "fragment"),
                g;
            var k = -1;
            if (tb(f, "_gl=")) k = 4;
            else {
                var m = f.indexOf("&_gl=");
                m > 0 && (k = m + 3 + 2)
            }
            if (k < 0) g = void 0;
            else {
                var n = f.indexOf("&", k);
                g = n < 0 ? f.substring(k) : f.substring(k, n)
            }
            b.fragment = Yq(g || "") || {};
            a && Zq(c, d, f)
        }
    }

    function $q(a, b) {
        var c = Vq(a).exec(b),
            d = b;
        if (c) {
            var e = c[2],
                f = c[4];
            d = c[1];
            f && (d = d + e + f)
        }
        return d
    }

    function Zq(a, b, c) {
        function d(g, k) {
            var m = $q("_gl", g);
            m.length && (m = k + m);
            return m
        }
        if (cc && cc.replaceState) {
            var e = Vq("_gl");
            if (e.test(b) || e.test(c)) {
                var f = Sj(a, "path");
                b = d(b, "?");
                c = d(c, "#");
                cc.replaceState({}, "", "" + f + b + c)
            }
        }
    }

    function ar(a, b) {
        var c = Xq(!!b),
            d = Nq();
        d.data || (d.data = {
            query: {},
            fragment: {}
        }, c(d.data));
        var e = {},
            f = d.data;
        f && (rb(e, f.query), a && rb(e, f.fragment));
        return e
    }
    var Yq = function(a) {
        try {
            var b = br(a, 3);
            if (b !== void 0) {
                for (var c = {}, d = b ? b.split("*") : [], e = 0; e + 1 < d.length; e += 2) {
                    var f = d[e],
                        g = Ta(d[e + 1]);
                    c[f] = g
                }
                Va("TAGGING", 6);
                return c
            }
        } catch (k) {
            Va("TAGGING", 8)
        }
    };

    function br(a, b) {
        if (a) {
            var c;
            a: {
                for (var d = a, e = 0; e < 3; ++e) {
                    var f = Qq.exec(d);
                    if (f) {
                        c = f;
                        break a
                    }
                    d = decodeURIComponent(d)
                }
                c = void 0
            }
            var g = c;
            if (g && g[1] === "1") {
                var k = g[3],
                    m;
                a: {
                    for (var n = g[2], p = 0; p < b; ++p)
                        if (n === Wq(k, p)) {
                            m = !0;
                            break a
                        }
                    m = !1
                }
                if (m) return k;
                Va("TAGGING", 7)
            }
        }
    }

    function cr(a, b, c, d, e) {
        function f(p) {
            p = $q(a, p);
            var q = p.charAt(p.length - 1);
            p && q !== "&" && (p += "&");
            return p + n
        }
        d = d === void 0 ? !1 : d;
        e = e === void 0 ? !1 : e;
        var g = Uq(c);
        if (!g) return "";
        var k = g.query || "",
            m = g.fragment || "",
            n = a + "=" + b;
        d ? m.substring(1).length !== 0 && e || (m = "#" + f(m.substring(1))) : k = "?" + f(k.substring(1));
        return "" + g.ji + k + m
    }

    function dr(a, b) {
        function c(n, p, q) {
            var r;
            a: {
                for (var t in n)
                    if (n.hasOwnProperty(t)) {
                        r = !0;
                        break a
                    }
                r = !1
            }
            if (r) {
                var v, u = [],
                    w;
                for (w in n)
                    if (n.hasOwnProperty(w)) {
                        var y = n[w];
                        y !== void 0 && y === y && y !== null && y.toString() !== "[object Object]" && (u.push(w), u.push(Ra(String(y))))
                    }
                var x = u.join("*");
                v = ["1", Wq(x), x].join("*");
                d ? (ki(3) || ki(1) || !p) && er("_gl", v, a, p, q) : fr("_gl", v, a, p, q)
            }
        }
        var d = (a.tagName || "").toUpperCase() === "FORM",
            e = Pq(b, 1, d),
            f = Pq(b, 2, d),
            g = Pq(b, 4, d),
            k = Pq(b, 3, d);
        c(e, !1, !1);
        c(f, !0, !1);
        ki(1) && c(g, !0, !0);
        for (var m in k) k.hasOwnProperty(m) &&
            gr(m, k[m], a)
    }

    function gr(a, b, c) {
        c.tagName.toLowerCase() === "a" ? fr(a, b, c) : c.tagName.toLowerCase() === "form" && er(a, b, c)
    }

    function fr(a, b, c, d, e) {
        d = d === void 0 ? !1 : d;
        e = e === void 0 ? !1 : e;
        var f;
        if (f = c.href) {
            var g;
            if (!(g = !ki(5) || d)) {
                var k = B.location.href,
                    m = Uq(c.href),
                    n = Uq(k);
                g = !(m && n && m.ji === n.ji && m.query === n.query && m.fragment)
            }
            f = g
        }
        if (f) {
            var p = cr(a, b, c.href, d, e);
            Ub.test(p) && (c.href = p)
        }
    }

    function er(a, b, c, d, e) {
        d = d === void 0 ? !1 : d;
        e = e === void 0 ? !1 : e;
        if (c && c.action) {
            var f = (c.method || "").toLowerCase();
            if (f !== "get" || d) {
                if (f === "get" || f === "post") {
                    var g = cr(a, b, c.action, d, e);
                    Ub.test(g) && (c.action = g)
                }
            } else {
                for (var k = c.childNodes || [], m = !1, n = 0; n < k.length; n++) {
                    var p = k[n];
                    if (p.name === a) {
                        p.setAttribute("value", b);
                        m = !0;
                        break
                    }
                }
                if (!m) {
                    var q = F.createElement("input");
                    q.setAttribute("type", "hidden");
                    q.setAttribute("name", a);
                    q.setAttribute("value", b);
                    c.appendChild(q)
                }
            }
        }
    }

    function Lq(a) {
        try {
            var b;
            a: {
                for (var c = a, d = 100; c && d > 0;) {
                    if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                        b = c;
                        break a
                    }
                    c = c.parentNode;
                    d--
                }
                b = null
            }
            var e = b;
            if (e) {
                var f = e.protocol;
                f !== "http:" && f !== "https:" || dr(e, e.hostname)
            }
        } catch (g) {}
    }

    function Mq(a) {
        try {
            if (a.action) {
                var b = Sj(Yj(a.action), "host");
                dr(a, b)
            }
        } catch (c) {}
    }

    function hr(a, b, c, d) {
        Kq();
        var e = c === "fragment" ? 2 : 1;
        d = !!d;
        Oq(a, b, e, d, !1);
        e === 2 && Va("TAGGING", 23);
        d && Va("TAGGING", 24)
    }

    function ir(a, b) {
        Kq();
        Oq(a, [Uj(B.location, "host", !0)], b, !0, !0)
    }

    function jr() {
        var a = F.location.hostname,
            b = Rq.exec(F.referrer);
        if (!b) return !1;
        var c = b[2],
            d = b[1],
            e = "";
        if (c) {
            var f = c.split("/"),
                g = f[1];
            e = g === "s" ? decodeURIComponent(f[2]) : decodeURIComponent(g)
        } else if (d) {
            if (d.indexOf("xn--") === 0) return !1;
            e = d.replace(/-/g, ".").replace(/\.\./g, "-")
        }
        var k = a.replace(Sq, ""),
            m = e.replace(Sq, "");
        return k === m || ub(k, "." + m)
    }

    function kr(a, b) {
        return a === !1 ? !1 : a || b || jr()
    };
    var lr = ["1"],
        mr = {},
        nr = {};

    function or(a, b) {
        b = b === void 0 ? !0 : b;
        var c = pr(a.prefix);
        if (mr[c]) qr(a);
        else if (rr(c, a.path, a.domain)) {
            var d = nr[pr(a.prefix)];
            b && sr(a, d ? d.id : void 0, d ? d.ei : void 0);
            qr(a)
        } else {
            var e = Zj("auiddc");
            if (e) Va("TAGGING", 17), mr[c] = e;
            else if (b) {
                var f = pr(a.prefix),
                    g = vq();
                tr(f, g, a);
                rr(c, a.path, a.domain);
                qr(a, !0)
            }
        }
    }

    function qr(a, b) {
        if ((b === void 0 ? 0 : b) && Gq()) {
            var c = Bq(!1);
            c.error === 0 && c.value && "gcl_ctr" in c.value && (delete c.value.gcl_ctr, Cq(c))
        }
        zl(["ad_storage", "ad_user_data"]) && ki(10) && Hq() === -1 && Iq(0, a)
    }

    function sr(a, b, c) {
        var d = pr(a.prefix),
            e = mr[d];
        if (e) {
            var f = e.split(".");
            if (f.length === 2) {
                var g = Number(f[1]) || 0;
                if (g) {
                    var k = e;
                    b && (k = e + "." + b + "." + (c ? c : Math.floor(ob() / 1E3)));
                    tr(d, k, a, g * 1E3)
                }
            }
        }
    }

    function tr(a, b, c, d) {
        var e = xq(b, "1", c.domain, c.path),
            f = yq(c, d);
        f.Jb = ur();
        oq(a, e, f)
    }

    function rr(a, b, c) {
        var d = wq(a, b, c, lr, ur());
        if (!d) return !1;
        vr(a, d);
        return !0
    }

    function vr(a, b) {
        var c = b.split(".");
        c.length === 5 ? (mr[a] = c.slice(0, 2).join("."), nr[a] = {
            id: c.slice(2, 4).join("."),
            ei: Number(c[4]) || 0
        }) : c.length === 3 ? nr[a] = {
            id: c.slice(0, 2).join("."),
            ei: Number(c[2]) || 0
        } : mr[a] = b
    }

    function pr(a) {
        return (a || "_gcl") + "_au"
    }

    function wr(a) {
        function b() {
            zl(c) && a()
        }
        var c = ur();
        Gl(function() {
            b();
            zl(c) || Hl(b, c)
        }, c)
    }

    function xr(a) {
        var b = ar(!0),
            c = pr(a.prefix);
        wr(function() {
            var d = b[c];
            if (d) {
                vr(c, d);
                var e = Number(mr[c].split(".")[1]) * 1E3;
                if (e) {
                    Va("TAGGING", 16);
                    var f = yq(a, e);
                    f.Jb = ur();
                    var g = xq(d, "1", a.domain, a.path);
                    oq(c, g, f)
                }
            }
        })
    }

    function yr(a, b, c, d, e) {
        e = e || {};
        var f = function() {
            var g = {},
                k = wq(a, e.path, e.domain, lr, ur());
            k && (g[a] = k);
            return g
        };
        wr(function() {
            hr(f, b, c, d)
        })
    }

    function ur() {
        return ["ad_storage", "ad_user_data"]
    };
    var zr = {},
        Ar = (zr.k = {
            Z: /^[\w-]+$/
        }, zr.b = {
            Z: /^[\w-]+$/,
            si: !0
        }, zr.i = {
            Z: /^[1-9]\d*$/
        }, zr.u = {
            Z: /^[1-9]\d*$/
        }, zr);
    var Br = {},
        Er = (Br[5] = {
            Wk: {
                2: Cr
            },
            Ih: ["k", "i", "b", "u"]
        }, Br[4] = {
            Wk: {
                2: Cr,
                GCL: Dr
            },
            Ih: ["k", "i", "b"]
        }, Br);

    function Fr(a) {
        var b = Er[5];
        if (b) {
            var c = a.split(".")[0];
            if (c) {
                var d = b.Wk[c];
                if (d) return d(a, 5)
            }
        }
    }

    function Cr(a, b) {
        var c = a.split(".");
        if (c.length === 3) {
            var d = {},
                e = Er[b];
            if (e) {
                for (var f = e.Ih, g = l(c[2].split("$")), k = g.next(); !k.done; k = g.next()) {
                    var m = k.value,
                        n = m[0];
                    if (f.indexOf(n) !== -1) try {
                        var p = decodeURIComponent(m.substring(1)),
                            q = Ar[n];
                        q && (q.si ? (d[n] = d[n] || [], d[n].push(p)) : d[n] = p)
                    } catch (r) {}
                }
                return d
            }
        }
    }

    function Gr(a, b) {
        var c = Er[5];
        if (c) {
            for (var d = [], e = l(c.Ih), f = e.next(); !f.done; f = e.next()) {
                var g = f.value,
                    k = Ar[g];
                if (k) {
                    var m = a[g];
                    if (m !== void 0)
                        if (k.si && Array.isArray(m))
                            for (var n = l(m), p = n.next(); !p.done; p = n.next()) d.push(encodeURIComponent("" + g + p.value));
                        else d.push(encodeURIComponent("" + g + m))
                }
            }
            return ["2", b || "1", d.join("$")].join(".")
        }
    }

    function Dr(a) {
        var b = a.split(".");
        b.shift();
        var c = b.shift(),
            d = b.shift(),
            e = {};
        return e.k = d, e.i = c, e.b = b, e
    };
    var Hr = new Map([
        [5, "ad_storage"],
        [4, ["ad_storage", "ad_user_data"]]
    ]);

    function Ir(a) {
        if (Er[5]) {
            for (var b = [], c = dq(a, void 0, void 0, Hr.get(5)), d = l(c), e = d.next(); !e.done; e = d.next()) {
                var f = Fr(e.value);
                f && (Jr(f), b.push(f))
            }
            return b
        }
    }

    function Kr(a, b, c, d) {
        c = c || {};
        var e = tq(c.domain, c.path),
            f = Gr(b, e);
        if (f) {
            var g = yq(c, d, void 0, Hr.get(5));
            oq(a, f, g)
        }
    }

    function Lr(a, b) {
        var c = b.Z;
        return typeof c === "function" ? c(a) : c.test(a)
    }

    function Jr(a) {
        for (var b = l(Object.keys(a)), c = b.next(), d = {}; !c.done; d = {
                Se: void 0
            }, c = b.next()) {
            var e = c.value,
                f = a[e];
            d.Se = Ar[e];
            d.Se ? d.Se.si ? a[e] = Array.isArray(f) ? f.filter(function(g) {
                return function(k) {
                    return Lr(k, g.Se)
                }
            }(d)) : void 0 : typeof f === "string" && Lr(f, d.Se) || (a[e] = void 0) : a[e] = void 0
        }
    };

    function Mr(a) {
        for (var b = [], c = F.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push({
                zi: f[1],
                value: f[2],
                timestamp: Number(f[2].split(".")[1]) || 0
            })
        }
        b.sort(function(g, k) {
            return k.timestamp - g.timestamp
        });
        return b
    }

    function Nr(a, b) {
        var c = Mr(a),
            d = {};
        if (!c || !c.length) return d;
        for (var e = 0; e < c.length; e++) {
            var f = c[e].value.split(".");
            if (!(f[0] !== "1" || b && f.length < 3 || !b && f.length !== 3) && Number(f[1])) {
                d[c[e].zi] || (d[c[e].zi] = []);
                var g = {
                    version: f[0],
                    timestamp: Number(f[1]) * 1E3,
                    T: f[2]
                };
                b && f.length > 3 && (g.labels = f.slice(3));
                d[c[e].zi].push(g)
            }
        }
        return d
    };

    function Or() {
        var a = String,
            b = B.location.hostname,
            c = B.location.pathname,
            d = b = Cb(b);
        d.split(".").length > 2 && (d = d.replace(/^(www[0-9]*|web|ftp|wap|home|m|w|amp|mobile)\./, ""));
        b = d;
        c = Cb(c);
        var e = c.split(";")[0];
        e = e.replace(/\/(ar|slp|web|index)?\/?$/, "");
        return a(bq(("" + b + e).toLowerCase()))
    };
    var Pr = /^\w+$/,
        Qr = /^[\w-]+$/,
        Rr = {},
        Sr = (Rr.aw = "_aw", Rr.dc = "_dc", Rr.gf = "_gf", Rr.gp = "_gp", Rr.gs = "_gs", Rr.ha = "_ha", Rr.ag = "_ag", Rr.gb = "_gb", Rr);

    function Tr() {
        return ["ad_storage", "ad_user_data"]
    }

    function Ur(a) {
        return !ki(8) || zl(a)
    }

    function Vr(a, b) {
        function c() {
            var d = Ur(b);
            d && a();
            return d
        }
        Gl(function() {
            c() || Hl(c, b)
        }, b)
    }

    function Wr(a) {
        return Xr(a).map(function(b) {
            return b.T
        })
    }

    function Yr(a) {
        return Zr(a).filter(function(b) {
            return b.T
        }).map(function(b) {
            return b.T
        })
    }

    function Zr(a) {
        var b = $r(a.prefix),
            c = as("gb", b),
            d = as("ag", b);
        if (!d || !c) return [];
        var e = function(k) {
                return function(m) {
                    m.type = k;
                    return m
                }
            },
            f = Xr(c).map(e("gb")),
            g = bs(d).map(e("ag"));
        return f.concat(g).sort(function(k, m) {
            return m.timestamp - k.timestamp
        })
    }

    function cs(a, b, c, d, e, f) {
        var g = cb(a, function(k) {
            return k.T === c
        });
        g ? (g.timestamp < d && (g.timestamp = d, g.Qd = f), g.labels = ds(g.labels || [], e || [])) : a.push({
            version: b,
            T: c,
            timestamp: d,
            labels: e,
            Qd: f
        })
    }

    function bs(a) {
        for (var b = Ir(a) || [], c = [], d = l(b), e = d.next(); !e.done; e = d.next()) {
            var f = e.value,
                g = f,
                k = g.k,
                m = g.b,
                n = es(f);
            if (n) {
                var p = void 0;
                ki(9) && (p = f.u);
                cs(c, "2", k, n, m || [], p)
            }
        }
        return c.sort(function(q, r) {
            return r.timestamp - q.timestamp
        })
    }

    function Xr(a) {
        for (var b = [], c = dq(a, F.cookie, void 0, Tr()), d = l(c), e = d.next(); !e.done; e = d.next()) {
            var f = fs(e.value);
            if (f != null) {
                var g = f;
                cs(b, g.version, g.T, g.timestamp, g.labels)
            }
        }
        b.sort(function(k, m) {
            return m.timestamp - k.timestamp
        });
        return gs(b)
    }

    function hs(a, b) {
        for (var c = [], d = l(a), e = d.next(); !e.done; e = d.next()) {
            var f = e.value;
            c.includes(f) || c.push(f)
        }
        for (var g = l(b), k = g.next(); !k.done; k = g.next()) {
            var m = k.value;
            c.includes(m) || c.push(m)
        }
        return c
    }

    function is(a, b) {
        var c = cb(a, function(d) {
            return d.T === b.T
        });
        c ? (c.timestamp < b.timestamp && (c.timestamp = b.timestamp, c.Qd = b.Qd), c.Oa = c.Oa ? b.Oa ? c.timestamp < b.timestamp ? b.Oa : c.Oa : c.Oa || 0 : b.Oa || 0, c.labels = hs(c.labels || [], b.labels || []), c.Vc = hs(c.Vc || [], b.Vc || [])) : a.push(b)
    }

    function js() {
        var a = Dq("gclid");
        if (!a || a.error || !a.value || typeof a.value !== "object") return null;
        var b = a.value;
        try {
            if (!("value" in b && b.value) || typeof b.value !== "object") return null;
            var c = b.value,
                d = c.value;
            return d && d.match(Qr) ? {
                version: "",
                T: d,
                timestamp: Number(c.creationTimeMs) || 0,
                labels: [],
                Oa: c.linkDecorationSource || 0,
                Vc: [2]
            } : null
        } catch (e) {
            return null
        }
    }

    function ks(a) {
        for (var b = [], c = dq(a, F.cookie, void 0, Tr()), d = l(c), e = d.next(); !e.done; e = d.next()) {
            var f = fs(e.value);
            f != null && (f.Qd = void 0, f.Oa = 0, f.Vc = [1], is(b, f))
        }
        var g = js();
        g && (g.Qd = void 0, g.Oa = g.Oa || 0, g.Vc = g.Vc || [2], is(b, g));
        b.sort(function(k, m) {
            return m.timestamp - k.timestamp
        });
        return gs(b)
    }

    function ds(a, b) {
        if (!a.length) return b;
        if (!b.length) return a;
        var c = {};
        return a.concat(b).filter(function(d) {
            return c.hasOwnProperty(d) ? !1 : c[d] = !0
        })
    }

    function $r(a) {
        return a && typeof a === "string" && a.match(Pr) ? a : "_gcl"
    }

    function ls(a, b, c) {
        var d = Yj(a),
            e = Sj(d, "query", !1, void 0, "gclsrc"),
            f = {
                value: Sj(d, "query", !1, void 0, "gclid"),
                Oa: c ? 4 : 2
            };
        if (b && (!f.value || !e)) {
            var g = d.hash.replace("#", "");
            f.value || (f.value = Rj(g, "gclid", !1), f.Oa = 3);
            e || (e = Rj(g, "gclsrc", !1))
        }
        return !f.value || e !== void 0 && e !== "aw" && e !== "aw.ds" ? [] : [f]
    }

    function ms(a, b) {
        var c = Yj(a),
            d = Sj(c, "query", !1, void 0, "gclid"),
            e = Sj(c, "query", !1, void 0, "gclsrc"),
            f = Sj(c, "query", !1, void 0, "wbraid");
        f = Ab(f);
        var g = Sj(c, "query", !1, void 0, "gbraid"),
            k = Sj(c, "query", !1, void 0, "gad_source"),
            m = Sj(c, "query", !1, void 0, "dclid");
        if (b && !(d && e && f && g)) {
            var n = c.hash.replace("#", "");
            d = d || Rj(n, "gclid", !1);
            e = e || Rj(n, "gclsrc", !1);
            f = f || Rj(n, "wbraid", !1);
            g = g || Rj(n, "gbraid", !1);
            k = k || Rj(n, "gad_source", !1)
        }
        return ns(d, e, m, f, g, k)
    }

    function os() {
        return ms(B.location.href, !0)
    }

    function ns(a, b, c, d, e, f) {
        var g = {},
            k = function(m, n) {
                g[n] || (g[n] = []);
                g[n].push(m)
            };
        g.gclid = a;
        g.gclsrc = b;
        g.dclid = c;
        if (a !== void 0 && a.match(Qr)) switch (b) {
            case void 0:
                k(a, "aw");
                break;
            case "aw.ds":
                k(a, "aw");
                k(a, "dc");
                break;
            case "ds":
                k(a, "dc");
                break;
            case "3p.ds":
                k(a, "dc");
                break;
            case "gf":
                k(a, "gf");
                break;
            case "ha":
                k(a, "ha")
        }
        c && k(c, "dc");
        d !== void 0 && Qr.test(d) && (g.wbraid = d, k(d, "gb"));
        e !== void 0 && Qr.test(e) && (g.gbraid = e, k(e, "ag"));
        f !== void 0 && Qr.test(f) && (g.gad_source = f, k(f, "gs"));
        return g
    }

    function ps(a) {
        for (var b = os(), c = !0, d = l(Object.keys(b)), e = d.next(); !e.done; e = d.next())
            if (b[e.value] !== void 0) {
                c = !1;
                break
            }
        c && (b = ms(B.document.referrer, !1), b.gad_source = void 0);
        qs(b, !1, a)
    }

    function rs(a) {
        ps(a);
        var b = ls(B.location.href, !0, !1);
        b.length || (b = ls(B.document.referrer, !1, !0));
        if (b.length) {
            var c = b[0];
            a = a || {};
            var d = ob(),
                e = yq(a, d, !0),
                f = Tr(),
                g = function() {
                    Ur(f) && e.expires !== void 0 && Aq("gclid", {
                        value: {
                            value: c.value,
                            creationTimeMs: d,
                            linkDecorationSource: c.Oa
                        },
                        expires: Number(e.expires)
                    })
                };
            Gl(function() {
                g();
                Ur(f) || Hl(g, f)
            }, f)
        }
    }

    function qs(a, b, c, d, e) {
        c = c || {};
        e = e || [];
        var f = $r(c.prefix),
            g = d || ob(),
            k = Math.round(g / 1E3),
            m = Tr(),
            n = !1,
            p = !1,
            q = function() {
                if (Ur(m)) {
                    var r = yq(c, g, !0);
                    r.Jb = m;
                    for (var t = function(H, O) {
                            var K = as(H, f);
                            K && (oq(K, O, r), H !== "gb" && (n = !0))
                        }, v = function(H) {
                            var O = ["GCL", k, H];
                            e.length > 0 && O.push(e.join("."));
                            return O.join(".")
                        }, u = l(["aw", "dc", "gf", "ha", "gp"]), w = u.next(); !w.done; w = u.next()) {
                        var y = w.value;
                        a[y] && t(y, v(a[y][0]))
                    }
                    if (!n && a.gb) {
                        var x = a.gb[0],
                            A = as("gb", f);
                        !b && Xr(A).some(function(H) {
                            return H.T === x && H.labels && H.labels.length >
                                0
                        }) || t("gb", v(x))
                    }
                }
                if (!p && a.gbraid && Ur("ad_storage") && (p = !0, !n)) {
                    var C = a.gbraid,
                        D = as("ag", f);
                    if (b || !bs(D).some(function(H) {
                            return H.T === C && H.labels && H.labels.length > 0
                        })) {
                        var E = {},
                            I = (E.k = C, E.i = "" + k, E.b = e, E);
                        Kr(D, I, c, g)
                    }
                }
                ss(a, f, g, c)
            };
        Gl(function() {
            q();
            Ur(m) || Hl(q, m)
        }, m)
    }

    function ss(a, b, c, d) {
        if (a.gad_source !== void 0 && Ur("ad_storage")) {
            if (ki(4)) {
                var e = Gc();
                if (e === "r" || e === "h") return
            }
            var f = a.gad_source,
                g = as("gs", b);
            if (g) {
                var k = Math.floor((ob() - (Fc() || 0)) / 1E3),
                    m;
                if (ki(9)) {
                    var n = Or(),
                        p = {};
                    m = (p.k = f, p.i = "" + k, p.u = n, p)
                } else {
                    var q = {};
                    m = (q.k = f, q.i = "" + k, q)
                }
                Kr(g, m, d, c)
            }
        }
    }

    function ts(a, b) {
        var c = ar(!0);
        Vr(function() {
            for (var d = $r(b.prefix), e = 0; e < a.length; ++e) {
                var f = a[e];
                if (Sr[f] !== void 0) {
                    var g = as(f, d),
                        k = c[g];
                    if (k) {
                        var m = Math.min(us(k), ob()),
                            n;
                        b: {
                            for (var p = m, q = dq(g, F.cookie, void 0, Tr()), r = 0; r < q.length; ++r)
                                if (us(q[r]) > p) {
                                    n = !0;
                                    break b
                                }
                            n = !1
                        }
                        if (!n) {
                            var t = yq(b, m, !0);
                            t.Jb = Tr();
                            oq(g, k, t)
                        }
                    }
                }
            }
            qs(ns(c.gclid, c.gclsrc), !1, b)
        }, Tr())
    }

    function vs(a) {
        var b = ["ag"],
            c = ar(!0),
            d = $r(a.prefix);
        Vr(function() {
            for (var e = 0; e < b.length; ++e) {
                var f = as(b[e], d);
                if (f) {
                    var g = c[f];
                    if (g) {
                        var k = Fr(g);
                        if (k) {
                            var m = es(k);
                            m || (m = ob());
                            var n;
                            a: {
                                for (var p = m, q = Ir(f), r = 0; r < q.length; ++r)
                                    if (es(q[r]) > p) {
                                        n = !0;
                                        break a
                                    }
                                n = !1
                            }
                            if (n) break;
                            k.i = "" + Math.round(m / 1E3);
                            Kr(f, k, a, m)
                        }
                    }
                }
            }
        }, ["ad_storage"])
    }

    function as(a, b) {
        var c = Sr[a];
        if (c !== void 0) return b + c
    }

    function us(a) {
        return ws(a.split(".")).length !== 0 ? (Number(a.split(".")[1]) || 0) * 1E3 : 0
    }

    function es(a) {
        return a ? (Number(a.i) || 0) * 1E3 : 0
    }

    function fs(a) {
        var b = ws(a.split("."));
        return b.length === 0 ? null : {
            version: b[0],
            T: b[2],
            timestamp: (Number(b[1]) || 0) * 1E3,
            labels: b.slice(3)
        }
    }

    function ws(a) {
        return a.length < 3 || a[0] !== "GCL" && a[0] !== "1" || !/^\d+$/.test(a[1]) || !Qr.test(a[2]) ? [] : a
    }

    function xs(a, b, c, d, e) {
        if (Array.isArray(b) && cq(B)) {
            var f = $r(e),
                g = function() {
                    for (var k = {}, m = 0; m < a.length; ++m) {
                        var n = as(a[m], f);
                        if (n) {
                            var p = dq(n, F.cookie, void 0, Tr());
                            p.length && (k[n] = p.sort()[p.length - 1])
                        }
                    }
                    return k
                };
            Vr(function() {
                hr(g, b, c, d)
            }, Tr())
        }
    }

    function ys(a, b, c, d) {
        if (Array.isArray(a) && cq(B)) {
            var e = ["ag"],
                f = $r(d),
                g = function() {
                    for (var k = {}, m = 0; m < e.length; ++m) {
                        var n = as(e[m], f);
                        if (!n) return {};
                        var p = Ir(n);
                        if (p.length) {
                            var q = p.sort(function(r, t) {
                                return es(t) - es(r)
                            })[0];
                            k[n] = Gr(q)
                        }
                    }
                    return k
                };
            Vr(function() {
                hr(g, a, b, c)
            }, ["ad_storage"])
        }
    }

    function gs(a) {
        return a.filter(function(b) {
            return Qr.test(b.T)
        })
    }

    function zs(a, b) {
        if (cq(B)) {
            for (var c = $r(b.prefix), d = {}, e = 0; e < a.length; e++) Sr[a[e]] && (d[a[e]] = Sr[a[e]]);
            Vr(function() {
                hb(d, function(f, g) {
                    var k = dq(c + g, F.cookie, void 0, Tr());
                    k.sort(function(t, v) {
                        return us(v) - us(t)
                    });
                    if (k.length) {
                        var m = k[0],
                            n = us(m),
                            p = ws(m.split(".")).length !== 0 ? m.split(".").slice(3) : [],
                            q = {},
                            r;
                        r = ws(m.split(".")).length !== 0 ? m.split(".")[2] : void 0;
                        q[f] = [r];
                        qs(q, !0, b, n, p)
                    }
                })
            }, Tr())
        }
    }

    function As(a) {
        var b = ["ag"],
            c = ["gbraid"];
        Vr(function() {
            for (var d = $r(a.prefix), e = 0; e < b.length; ++e) {
                var f = as(b[e], d);
                if (!f) break;
                var g = Ir(f);
                if (g.length) {
                    var k = g.sort(function(q, r) {
                            return es(r) - es(q)
                        })[0],
                        m = es(k),
                        n = k.b,
                        p = {};
                    p[c[e]] = k.k;
                    qs(p, !0, a, m, n)
                }
            }
        }, ["ad_storage"])
    }

    function Bs(a, b) {
        for (var c = 0; c < b.length; ++c)
            if (a[b[c]]) return !0;
        return !1
    }

    function Cs(a) {
        function b(k, m, n) {
            n && (k[m] = n)
        }
        if (Dl()) {
            var c = os(),
                d;
            a.includes("gad_source") && (d = c.gad_source !== void 0 ? c.gad_source : ar(!1)._gs);
            if (Bs(c, a) || d) {
                var e = {};
                b(e, "gclid", c.gclid);
                b(e, "dclid", c.dclid);
                b(e, "gclsrc", c.gclsrc);
                b(e, "wbraid", c.wbraid);
                b(e, "gbraid", c.gbraid);
                ir(function() {
                    return e
                }, 3);
                var f = {},
                    g = (f._up = "1", f);
                b(g, "_gs", d);
                ir(function() {
                    return g
                }, 1)
            }
        }
    }

    function Ds(a) {
        if (!ki(1)) return null;
        var b = ar(!0).gad_source;
        if (b != null) return B.location.hash = "", b;
        if (ki(2)) {
            var c = Yj(B.location.href);
            b = Sj(c, "query", !1, void 0, "gad_source");
            if (b != null) return b;
            var d = os();
            if (Bs(d, a)) return "0"
        }
        return null
    }

    function Es(a) {
        var b = Ds(a);
        b != null && ir(function() {
            var c = {};
            return c.gad_source = b, c
        }, 4)
    }

    function Fs(a, b, c) {
        var d = [];
        if (b.length === 0) return d;
        for (var e = {}, f = 0; f < b.length; f++) {
            var g = b[f],
                k = g.type ? g.type : "gcl";
            (g.labels || []).indexOf(c) === -1 ? (a.push(0), e[k] || d.push(g)) : a.push(1);
            e[k] = !0
        }
        return d
    }

    function Gs(a, b, c, d) {
        var e = [];
        c = c || {};
        if (!Ur(Tr())) return e;
        var f = Xr(a),
            g = Fs(e, f, b);
        if (g.length && !d)
            for (var k = l(g), m = k.next(); !m.done; m = k.next()) {
                var n = m.value,
                    p = n.timestamp,
                    q = [n.version, Math.round(p / 1E3), n.T].concat(n.labels || [], [b]).join("."),
                    r = yq(c, p, !0);
                r.Jb = Tr();
                oq(a, q, r)
            }
        return e
    }

    function Hs(a, b) {
        var c = [];
        b = b || {};
        var d = Zr(b),
            e = Fs(c, d, a);
        if (e.length)
            for (var f = l(e), g = f.next(); !g.done; g = f.next()) {
                var k = g.value,
                    m = $r(b.prefix),
                    n = as(k.type, m);
                if (!n) break;
                var p = k,
                    q = p.version,
                    r = p.T,
                    t = p.labels,
                    v = p.timestamp,
                    u = Math.round(v / 1E3);
                if (k.type === "ag") {
                    var w = {},
                        y = (w.k = r, w.i = "" + u, w.b = (t || []).concat([a]), w);
                    Kr(n, y, b, v)
                } else if (k.type === "gb") {
                    var x = [q, u, r].concat(t || [], [a]).join("."),
                        A = yq(b, v, !0);
                    A.Jb = Tr();
                    oq(n, x, A)
                }
            }
        return c
    }

    function Is(a, b) {
        var c = $r(b),
            d = as(a, c);
        if (!d) return 0;
        var e;
        e = a === "ag" ? bs(d) : Xr(d);
        for (var f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
        return f
    }

    function Js(a) {
        for (var b = 0, c = l(Object.keys(a)), d = c.next(); !d.done; d = c.next())
            for (var e = a[d.value], f = 0; f < e.length; f++) b = Math.max(b, Number(e[f].timestamp));
        return b
    }

    function Ks(a) {
        var b = Math.max(Is("aw", a), Js(Ur(Tr()) ? Nr() : {})),
            c = Math.max(Is("gb", a), Js(Ur(Tr()) ? Nr("_gac_gb", !0) : {}));
        c = Math.max(c, Is("ag", a));
        return c > b
    };

    function $s() {
        return Pm("dedupe_gclid", function() {
            return vq()
        })
    };
    var at = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
        bt = /^www.googleadservices.com$/;

    function ct(a) {
        a || (a = dt());
        return a.In ? !1 : a.Gm || a.Hm || a.Km || a.Im || a.Ye || a.sm || a.Jm || a.ym ? !0 : !1
    }

    function dt() {
        var a = {},
            b = ar(!0);
        a.In = !!b._up;
        var c = os();
        a.Gm = c.aw !== void 0;
        a.Hm = c.dc !== void 0;
        a.Km = c.wbraid !== void 0;
        a.Im = c.gbraid !== void 0;
        a.Jm = c.gclsrc === "aw.ds";
        a.Ye = Ns().Ye;
        var d = F.referrer ? Sj(Yj(F.referrer), "host") : "";
        a.ym = at.test(d);
        a.sm = bt.test(d);
        return a
    };
    var et = RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"),
        ft = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
        gt = /^\d+\.fls\.doubleclick\.net$/,
        ht = /;gac=([^;?]+)/,
        it = /;gacgb=([^;?]+)/;

    function jt(a, b) {
        if (gt.test(F.location.host)) {
            var c = F.location.href.match(b);
            return c && c.length === 2 && c[1].match(et) ? decodeURIComponent(c[1]) : ""
        }
        for (var d = [], e = l(Object.keys(a)), f = e.next(); !f.done; f = e.next()) {
            for (var g = f.value, k = [], m = a[g], n = 0; n < m.length; n++) k.push(m[n].T);
            d.push(g + ":" + k.join(","))
        }
        return d.length > 0 ? d.join(";") : ""
    }

    function kt(a, b, c) {
        for (var d = Ur(Tr()) ? Nr("_gac_gb", !0) : {}, e = [], f = !1, g = l(Object.keys(d)), k = g.next(); !k.done; k = g.next()) {
            var m = k.value,
                n = Gs("_gac_gb_" + m, a, b, c);
            f = f || n.length !== 0 && n.some(function(p) {
                return p === 1
            });
            e.push(m + ":" + n.join(","))
        }
        return {
            rm: f ? e.join(";") : "",
            qm: jt(d, it)
        }
    }

    function lt(a) {
        var b = F.location.href.match(new RegExp(";" + a + "=([^;?]+)"));
        return b && b.length === 2 && b[1].match(ft) ? b[1] : void 0
    }

    function mt(a) {
        var b = ki(9),
            c = {},
            d, e, f;
        gt.test(F.location.host) && (d = lt("gclgs"), e = lt("gclst"), b && (f = lt("gcllp")));
        if (d && e && (!b || f)) c.kg = d, c.mg = e, c.lg = f;
        else {
            var g = ob(),
                k = bs((a || "_gcl") + "_gs"),
                m = k.map(function(q) {
                    return q.T
                }),
                n = k.map(function(q) {
                    return g - q.timestamp
                }),
                p = [];
            b && (p = k.map(function(q) {
                return q.Qd
            }));
            m.length > 0 && n.length > 0 && (!b || p.length > 0) && (c.kg = m.join("."), c.mg = n.join("."), b && p.length > 0 && (c.lg = p.join(".")))
        }
        return c
    }

    function nt(a, b, c, d) {
        d = d === void 0 ? !1 : d;
        if (gt.test(F.location.host)) {
            var e = lt(c);
            if (e) return [{
                T: e
            }]
        } else {
            if (b === "gclid") {
                var f = (a || "_gcl") + "_aw";
                return d ? ks(f) : Xr(f)
            }
            if (b === "wbraid") return Xr((a || "_gcl") + "_gb");
            if (b === "braids") return Zr({
                prefix: a
            })
        }
        return []
    }

    function ot(a) {
        return nt(a, "gclid", "gclaw").map(function(b) {
            return b.T
        }).join(".")
    }

    function pt(a) {
        var b = nt(a, "gclid", "gclaw", !0),
            c = b.map(function(f) {
                return f.T
            }).join("."),
            d = b.map(function(f) {
                return f.Oa || 0
            }).join("."),
            e = b.map(function(f) {
                for (var g = 0, k = l(f.Vc || []), m = k.next(); !m.done; m = k.next()) {
                    var n = m.value;
                    n === 1 && (g |= 1);
                    n === 2 && (g |= 2)
                }
                return g.toString()
            }).join(".");
        return {
            T: c,
            sk: d,
            tk: e
        }
    }

    function qt(a) {
        return nt(a, "braids", "gclgb").map(function(b) {
            return b.T
        }).join(".")
    }

    function rt(a) {
        return gt.test(F.location.host) ? !(lt("gclaw") || lt("gac")) : Ks(a)
    }

    function st(a, b, c) {
        var d;
        d = c ? Hs(a, b) : Gs((b && b.prefix || "_gcl") + "_gb", a, b);
        return d.length === 0 || d.every(function(e) {
            return e === 0
        }) ? "" : d.join(".")
    };

    function tt() {
        var a = B.__uspapi;
        if ($a(a)) {
            var b = "";
            try {
                a("getUSPData", 1, function(c, d) {
                    if (d && c) {
                        var e = c.uspString;
                        e && RegExp("^[\\da-zA-Z-]{1,20}$").test(e) && (b = e)
                    }
                })
            } catch (c) {}
            return b
        }
    };

    function Et(a) {
        var b = V(a.m, Q.g.Rb),
            c = V(a.m, Q.g.nc);
        b && !c ? (a.eventName !== Q.g.ba && a.eventName !== Q.g.Yc && U(131), a.isAborted = !0) : !b && c && (U(132), a.isAborted = !0)
    }

    function Ft(a) {
        var b = W(Q.g.N) ? Om.pscdl : "denied";
        b != null && (a.j[Q.g.Ef] = b)
    }

    function Gt(a) {
        var b = hp(!0);
        a.j[Q.g.Qb] = b
    }

    function Ht(a) {
        Yp() && (a.j[Q.g.Gc] = 1)
    }

    function wt() {
        var a = F.title;
        if (a === void 0 || a === "") return "";
        var b = function(d) {
            try {
                return decodeURIComponent(d), !0
            } catch (e) {
                return !1
            }
        };
        a = encodeURIComponent(a);
        for (var c = 256; c > 0 && !b(a.substring(0, c));) c--;
        return decodeURIComponent(a.substring(0, c))
    }

    function It(a) {
        Jt(a, "ce", V(a.m, Q.g.Ma))
    }

    function Jt(a, b, c) {
        a.j[Q.g.Fd] || (a.j[Q.g.Fd] = {});
        a.j[Q.g.Fd][b] = c
    };

    function Qt(a, b, c, d) {
        var e = oc(),
            f;
        if (e === 1) a: {
            var g = oj;g = g.toLowerCase();
            for (var k = "https://" + g, m = "http://" + g, n = 1, p = F.getElementsByTagName("script"), q = 0; q < p.length && q < 100; q++) {
                var r = p[q].src;
                if (r) {
                    r = r.toLowerCase();
                    if (r.indexOf(m) === 0) {
                        f = 3;
                        break a
                    }
                    n === 1 && r.indexOf(k) === 0 && (n = 2)
                }
            }
            f = n
        }
        else f = e;
        return (f === 2 || d || "http:" !== B.location.protocol ? a : b) + c
    };

    function Rt(a) {
        return typeof a !== "object" || a === null ? {} : a
    }

    function St(a) {
        return a === void 0 || a === null ? "" : typeof a === "object" ? a.toString() : String(a)
    }

    function Tt(a) {
        if (a !== void 0 && a !== null) return St(a)
    }

    function Ut(a) {
        return typeof a === "number" ? a : Tt(a)
    };

    function fu(a) {
        return {
            getDestinationId: function() {
                return a.target.destinationId
            },
            getEventName: function() {
                return a.eventName
            },
            setEventName: function(b) {
                a.eventName = b
            },
            getHitData: function(b) {
                return a.j[b]
            },
            setHitData: function(b, c) {
                a.j[b] = c
            },
            setHitDataIfNotDefined: function(b, c) {
                a.j[b] === void 0 && (a.j[b] = c)
            },
            copyToHitData: function(b, c) {
                a.copyToHitData(b, c)
            },
            getMetadata: function(b) {
                return a.metadata[b]
            },
            setMetadata: function(b, c) {
                a.metadata[b] = c
            },
            isAborted: function() {
                return a.isAborted
            },
            abort: function() {
                a.isAborted = !0
            },
            getFromEventContext: function(b) {
                return V(a.m, b)
            },
            Wb: function() {
                return a
            },
            getHitKeys: function() {
                return Object.keys(a.j)
            }
        }
    };

    function mu(a, b) {
        return arguments.length === 1 ? nu("set", a) : nu("set", a, b)
    }

    function ou(a, b) {
        return arguments.length === 1 ? nu("config", a) : nu("config", a, b)
    }

    function pu(a, b, c) {
        c = c || {};
        c[Q.g.oc] = a;
        return nu("event", b, c)
    }

    function nu() {
        return arguments
    };
    var ru = function() {
        this.messages = [];
        this.j = []
    };
    ru.prototype.enqueue = function(a, b, c) {
        var d = this.messages.length + 1;
        a["gtm.uniqueEventId"] = b;
        a["gtm.priorityId"] = d;
        var e = Object.assign({}, c, {
                eventId: b,
                priorityId: d,
                fromContainerExecution: !0
            }),
            f = {
                message: a,
                notBeforeEventId: b,
                priorityId: d,
                messageContext: e
            };
        this.messages.push(f);
        for (var g = 0; g < this.j.length; g++) try {
            this.j[g](f)
        } catch (k) {}
    };
    ru.prototype.listen = function(a) {
        this.j.push(a)
    };
    ru.prototype.get = function() {
        for (var a = {}, b = 0; b < this.messages.length; b++) {
            var c = this.messages[b],
                d = a[c.notBeforeEventId];
            d || (d = [], a[c.notBeforeEventId] = d);
            d.push(c)
        }
        return a
    };
    ru.prototype.prune = function(a) {
        for (var b = [], c = [], d = 0; d < this.messages.length; d++) {
            var e = this.messages[d];
            e.notBeforeEventId === a ? b.push(e) : c.push(e)
        }
        this.messages = c;
        return b
    };

    function su(a, b, c) {
        c.eventMetadata = c.eventMetadata || {};
        c.eventMetadata.source_canonical_id = Qf.canonicalContainerId;
        tu().enqueue(a, b, c)
    }

    function uu() {
        var a = vu;
        tu().listen(a)
    }

    function tu() {
        return Pm("mb", function() {
            return new ru
        })
    };

    function wu(a) {
        var b, c = B,
            d = [];
        try {
            c.navigation && c.navigation.entries && (d = c.navigation.entries())
        } catch (k) {}
        b = d;
        for (var e = b.length - 1; e >= 0; e--) {
            var f = b[e],
                g = f.url && f.url.match("[?&#]" + a + "=([^&#]+)");
            if (g && g.length === 2) return g[1]
        }
    };
    var xu, yu = !1;

    function zu() {
        yu = !0;
        xu = productSettings, productSettings = void 0;
        xu = xu || {}
    }

    function Au(a) {
        yu || zu();
        return xu[a]
    };

    function Bu() {
        var a = B.screen;
        return {
            width: a ? a.width : 0,
            height: a ? a.height : 0
        }
    }

    function Cu(a) {
        if (F.hidden) return !0;
        var b = a.getBoundingClientRect();
        if (b.top === b.bottom || b.left === b.right || !B.getComputedStyle) return !0;
        var c = B.getComputedStyle(a, null);
        if (c.visibility === "hidden") return !0;
        for (var d = a, e = c; d;) {
            if (e.display === "none") return !0;
            var f = e.opacity,
                g = e.filter;
            if (g) {
                var k = g.indexOf("opacity(");
                k >= 0 && (g = g.substring(k + 8, g.indexOf(")", k)), g.charAt(g.length - 1) === "%" && (g = g.substring(0, g.length - 1)), f = String(Math.min(Number(g), Number(f))))
            }
            if (f !== void 0 && Number(f) <= 0) return !0;
            (d = d.parentElement) &&
            (e = B.getComputedStyle(d, null))
        }
        return !1
    }
    var Mf;
    var Rv = Number('') || 5,
        Sv = Number('') || 50,
        Tv = db();
    var Yv = Number('') || 500,
        Zv = Number('') || 5E3,
        $v = Number('20') || 10,
        aw = Number('') || 5E3;

    function bw(a) {
        return a.performance && a.performance.now() || Date.now()
    }
    var cw = function(a, b) {
        var c;
        return c
    };
    var dw;

    function jw() {
        var a = Pf(Mf.j, "", function() {
            return {}
        });
        try {
            return a("internal_sw_allowed"), !0
        } catch (b) {
            return !1
        }
    }

    function kw(a, b, c) {
        c = c === void 0 ? !1 : c;
    }
    var lw = function(a, b, c, d) {};

    function mw(a, b, c, d, e) {}

    function nw(a, b, c, d) {};
    var ow = function(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            e < 128 ? b[c++] = e : (e < 2048 ? b[c++] = e >> 6 | 192 : ((e & 64512) == 55296 && d + 1 < a.length && (a.charCodeAt(d + 1) & 64512) == 56320 ? (e = 65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023), b[c++] = e >> 18 | 240, b[c++] = e >> 12 & 63 | 128) : b[c++] = e >> 12 | 224, b[c++] = e >> 6 & 63 | 128), b[c++] = e & 63 | 128)
        }
        return b
    };
    Vo();
    dp() || So("iPod");
    So("iPad");
    !So("Android") || Wo() || Vo() || Uo() || So("Silk");
    Wo();
    !So("Safari") || Wo() || (To() ? 0 : So("Coast")) || Uo() || (To() ? 0 : So("Edge")) || (To() ? Ro("Microsoft Edge") : So("Edg/")) || (To() ? Ro("Opera") : So("OPR")) || Vo() || So("Silk") || So("Android") || ep();
    var pw = {},
        qw = null,
        rw = function(a) {
            for (var b = [], c = 0, d = 0; d < a.length; d++) {
                var e = a.charCodeAt(d);
                e > 255 && (b[c++] = e & 255, e >>= 8);
                b[c++] = e
            }
            var f = 4;
            f === void 0 && (f = 0);
            if (!qw) {
                qw = {};
                for (var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), k = ["+/=", "+/", "-_=", "-_.", "-_"], m = 0; m < 5; m++) {
                    var n = g.concat(k[m].split(""));
                    pw[m] = n;
                    for (var p = 0; p < n.length; p++) {
                        var q = n[p];
                        qw[q] === void 0 && (qw[q] = p)
                    }
                }
            }
            for (var r = pw[f], t = Array(Math.floor(b.length / 3)), v = r[64] || "", u = 0, w = 0; u < b.length - 2; u += 3) {
                var y = b[u],
                    x = b[u + 1],
                    A = b[u + 2],
                    C = r[y >> 2],
                    D = r[(y & 3) << 4 | x >> 4],
                    E = r[(x & 15) << 2 | A >> 6],
                    I = r[A & 63];
                t[w++] = "" + C + D + E + I
            }
            var H = 0,
                O = v;
            switch (b.length - u) {
                case 2:
                    H = b[u + 1], O = r[(H & 15) << 2] || v;
                case 1:
                    var K = b[u];
                    t[w] = "" + r[K >> 2] + r[(K & 3) << 4 | H >> 4] + O + v
            }
            return t.join("")
        };
    var sw = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function tw(a) {
        var b;
        return (b = a.google_tag_data) != null ? b : a.google_tag_data = {}
    }

    function uw() {
        var a = B.google_tag_data,
            b;
        if (a != null && a.uach) {
            var c = a.uach,
                d = Object.assign({}, c);
            c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
            b = d
        } else b = null;
        return b
    }

    function vw() {
        var a, b;
        return (b = (a = B.google_tag_data) == null ? void 0 : a.uach_promise) != null ? b : null
    }

    function ww(a) {
        var b, c;
        return typeof((b = a.navigator) == null ? void 0 : (c = b.userAgentData) == null ? void 0 : c.getHighEntropyValues) === "function"
    }

    function xw() {
        var a = B;
        if (!ww(a)) return null;
        var b = tw(a);
        if (b.uach_promise) return b.uach_promise;
        var c = a.navigator.userAgentData.getHighEntropyValues(sw).then(function(d) {
            b.uach != null || (b.uach = d);
            return d
        });
        return b.uach_promise = c
    };
    var zw = function(a, b) {
            if (a)
                for (var c = yw(a), d = l(Object.keys(c)), e = d.next(); !e.done; e = d.next()) {
                    var f = e.value;
                    b.j[f] = c[f]
                }
        },
        yw = function(a) {
            var b = {};
            b[Q.g.Uf] = a.architecture;
            b[Q.g.Vf] = a.bitness;
            a.fullVersionList && (b[Q.g.Wf] = a.fullVersionList.map(function(c) {
                return encodeURIComponent(c.brand || "") + ";" + encodeURIComponent(c.version || "")
            }).join("|"));
            b[Q.g.Xf] = a.mobile ? "1" : "0";
            b[Q.g.Yf] = a.model;
            b[Q.g.Zf] = a.platform;
            b[Q.g.cg] = a.platformVersion;
            b[Q.g.dg] = a.wow64 ? "1" : "0";
            return b
        },
        Bw = function(a) {
            var b = Aw.Hn,
                c = function(g, k) {
                    try {
                        a(g, k)
                    } catch (m) {}
                },
                d = uw();
            if (d) c(d);
            else {
                var e = vw();
                if (e) {
                    b = Math.min(Math.max(isFinite(b) ? b : 0, 0), 1E3);
                    var f = B.setTimeout(function() {
                        c.hf || (c.hf = !0, U(106), c(null, Error("Timeout")))
                    }, b);
                    e.then(function(g) {
                        c.hf || (c.hf = !0, U(104), B.clearTimeout(f), c(g))
                    }).catch(function(g) {
                        c.hf || (c.hf = !0, U(105), B.clearTimeout(f), c(null, g))
                    })
                } else c(null)
            }
        },
        Dw = function() {
            if (ww(B) && (Cw = ob(), !vw())) {
                var a = xw();
                a && (a.then(function() {
                    U(95)
                }), a.catch(function() {
                    U(96)
                }))
            }
        },
        Cw;

    function Ew(a) {
        var b;
        b = b === void 0 ? document : b;
        var c;
        return !((c = b.featurePolicy) == null || !c.allowedFeatures().includes(a))
    };

    function Fw() {
        return Ew("join-ad-interest-group") && $a(dc.joinAdInterestGroup)
    }

    function Gw(a, b, c) {
        var d = ji[3] === void 0 ? 1 : ji[3],
            e = 'iframe[data-tagging-id="' + b + '"]',
            f = [];
        try {
            if (d === 1) {
                var g = F.querySelector(e);
                g && (f = [g])
            } else f = Array.from(F.querySelectorAll(e))
        } catch (r) {}
        var k;
        a: {
            try {
                k = F.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]');
                break a
            } catch (r) {}
            k = void 0
        }
        var m = k,
            n = ((m == null ? void 0 : m.length) || 0) >= (ji[2] === void 0 ? 50 : ji[2]),
            p;
        if (p = f.length >= 1) {
            var q = Number(f[f.length - 1].dataset.loadTime);
            q !== void 0 && ob() - q < (ji[1] === void 0 ? 6E4 : ji[1]) ? (Va("TAGGING",
                9), p = !0) : p = !1
        }
        if (p) return !1;
        if (d === 1)
            if (f.length >= 1) Hw(f[0]);
            else {
                if (n) return Va("TAGGING", 10), !1
            }
        else f.length >= d ? Hw(f[0]) : n && Hw(m[0]);
        pc(a, c, {
            allow: "join-ad-interest-group"
        }, {
            taggingId: b,
            loadTime: ob()
        });
        return !0
    }

    function Hw(a) {
        try {
            a.parentNode.removeChild(a)
        } catch (b) {}
    }

    function Iw() {
        return "https://td.doubleclick.net"
    };

    function Jw(a) {
        var b = a.location.href;
        if (a === a.top) return {
            url: b,
            Tm: !0
        };
        var c = !1,
            d = a.document;
        d && d.referrer && (b = d.referrer, a.parent === a.top && (c = !0));
        var e = a.location.ancestorOrigins;
        if (e) {
            var f = e[e.length - 1];
            f && b.indexOf(f) === -1 && (c = !1, b = f)
        }
        return {
            url: b,
            Tm: c
        }
    };

    function Ax(a, b, c) {
        var d, e = a.GooglebQhCsO;
        e || (e = {}, a.GooglebQhCsO = e);
        d = e;
        if (d[b]) return !1;
        d[b] = [];
        d[b][0] = c;
        return !0
    };

    function Bx(a, b, c, d, e, f) {
        var g = $o(c, "fmt");
        if (d) {
            var k = $o(c, "random"),
                m = $o(c, "label") || "";
            if (!k) return !1;
            var n = rw(decodeURIComponent(m.replace(/\+/g, " ")) + ":" + decodeURIComponent(k.replace(/\+/g, " ")));
            if (!Ax(a, n, d)) return !1
        }
        g && Number(g) !== 4 && (c = bp(c, "rfmt", g));
        var p = bp(c, "fmt", 4);
        nc(p, function() {
            a.google_noFurtherRedirects && d && (a.google_noFurtherRedirects = null, d())
        }, e, f, b.getElementsByTagName("script")[0].parentElement || void 0);
        return !0
    };
    var Cx = {},
        Dx = (Cx[1] = {}, Cx[2] = {}, Cx[3] = {}, Cx[4] = {}, Cx);

    function Ex(a, b, c) {
        var d = Fx(c);
        d && (Dx[b][d] = a)
    }

    function Gx(a) {
        switch (a) {
            case "script-src":
            case "script-src-elem":
                return 1;
            case "frame-src":
                return 4;
            case "connect-src":
                return 2;
            case "img-src":
                return 3
        }
    }

    function Fx(a) {
        var b = a;
        a[0] === "/" && (b = B.location.origin + a);
        try {
            var c = new URL(b);
            return c.origin + c.pathname
        } catch (d) {}
    }

    function Hx(a) {
        var b = ya.apply(1, arguments);
        T(57) && pk && (Ex(a, 2, b[0]), Ex(a, 3, b[0]));
        zc.apply(null, ua(b))
    }

    function Ix(a) {
        var b = ya.apply(1, arguments);
        T(57) && pk && Ex(a, 2, b[0]);
        return Ac.apply(null, ua(b))
    }

    function Jx(a) {
        var b = ya.apply(1, arguments);
        T(57) && pk && Ex(a, 3, b[0]);
        rc.apply(null, ua(b))
    }

    function Kx(a) {
        var b = ya.apply(1, arguments),
            c = b[0];
        T(57) && pk && (Ex(a, 2, c), Ex(a, 3, c));
        return Cc.apply(null, ua(b))
    }

    function Lx(a) {
        var b = ya.apply(1, arguments);
        b[0] && T(57) && pk && Ex(a, 4, b[0]);
        pc.apply(null, ua(b))
    }

    function Mx(a) {
        var b = ya.apply(1, arguments);
        T(57) && pk && Ex(a, 1, b[2]);
        return Bx.apply(null, ua(b))
    }

    function Nx(a) {
        var b = ya.apply(1, arguments);
        T(57) && pk && Ex(a, 4, b[0]);
        Gw.apply(null, ua(b))
    };
    var Sx = {
        J: {
            Bi: "ads_conversion_hit",
            Zd: "container_execute_start",
            Ei: "container_setup_end",
            xg: "container_setup_start",
            Ci: "container_blocking_end",
            Di: "container_execute_end",
            Fi: "container_yield_end",
            yg: "container_yield_start",
            Hj: "event_execute_end",
            Gj: "event_evaluation_end",
            th: "event_evaluation_start",
            Ij: "event_setup_end",
            Fe: "event_setup_start",
            Kj: "ga4_conversion_hit",
            He: "page_load",
            bo: "pageview",
            uc: "snippet_load",
            ek: "tag_callback_error",
            fk: "tag_callback_failure",
            gk: "tag_callback_success",
            hk: "tag_execute_end",
            Gd: "tag_execute_start"
        }
    };

    function Tx() {
        function a(c, d) {
            var e = Wa(d);
            e && b.push([c, e])
        }
        var b = [];
        a("u", "GTM");
        a("ut", "TAGGING");
        a("h", "HEALTH");
        return b
    };
    var Ux = !1;

    function Dy(a, b) {}

    function Ey(a, b) {}

    function Fy(a, b) {}

    function Gy(a, b) {}

    function Hy() {
        var a = {};
        return a
    }

    function vy(a) {
        a = a === void 0 ? !0 : a;
        var b = {};
        return b
    }

    function Iy() {}

    function Jy(a, b) {}

    function Ky(a, b, c) {}

    function Ly() {};

    function tz(a, b) {
        if (data.entities) {
            var c = data.entities[a];
            if (c) return c[b]
        }
    };

    function uz(a, b, c) {
        c = c === void 0 ? !1 : c;
        vz().addRestriction(0, a, b, c)
    }

    function wz(a, b, c) {
        c = c === void 0 ? !1 : c;
        vz().addRestriction(1, a, b, c)
    }

    function xz() {
        var a = Kk();
        return vz().getRestrictions(1, a)
    }
    var yz = function() {
            this.container = {};
            this.j = {}
        },
        zz = function(a, b) {
            var c = a.container[b];
            c || (c = {
                _entity: {
                    internal: [],
                    external: []
                },
                _event: {
                    internal: [],
                    external: []
                }
            }, a.container[b] = c);
            return c
        };
    yz.prototype.addRestriction = function(a, b, c, d) {
        d = d === void 0 ? !1 : d;
        if (!d || !this.j[b]) {
            var e = zz(this, b);
            a === 0 ? d ? e._entity.external.push(c) : e._entity.internal.push(c) : a === 1 && (d ? e._event.external.push(c) : e._event.internal.push(c))
        }
    };
    yz.prototype.getRestrictions = function(a, b) {
        var c = zz(this, b);
        if (a === 0) {
            var d, e;
            return [].concat(ua((c == null ? void 0 : (d = c._entity) == null ? void 0 : d.internal) || []), ua((c == null ? void 0 : (e = c._entity) == null ? void 0 : e.external) || []))
        }
        if (a === 1) {
            var f, g;
            return [].concat(ua((c == null ? void 0 : (f = c._event) == null ? void 0 : f.internal) || []), ua((c == null ? void 0 : (g = c._event) == null ? void 0 : g.external) || []))
        }
        return []
    };
    yz.prototype.getExternalRestrictions = function(a, b) {
        var c = zz(this, b),
            d, e;
        return a === 0 ? (c == null ? void 0 : (d = c._entity) == null ? void 0 : d.external) || [] : (c == null ? void 0 : (e = c._event) == null ? void 0 : e.external) || []
    };
    yz.prototype.removeExternalRestrictions = function(a) {
        var b = zz(this, a);
        b._event && (b._event.external = []);
        b._entity && (b._entity.external = []);
        this.j[a] = !0
    };

    function vz() {
        return Pm("r", function() {
            return new yz
        })
    };
    var Az = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
        Bz = {
            cl: ["ecl"],
            customPixels: ["nonGooglePixels"],
            ecl: ["cl"],
            ehl: ["hl"],
            gaawc: ["googtag"],
            hl: ["ehl"],
            html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            nonGooglePixels: [],
            nonGoogleScripts: ["nonGooglePixels"],
            nonGoogleIframes: ["nonGooglePixels"]
        },
        Cz = {
            cl: ["ecl"],
            customPixels: ["customScripts",
                "html"
            ],
            ecl: ["cl"],
            ehl: ["hl"],
            gaawc: ["googtag"],
            hl: ["ehl"],
            html: ["customScripts"],
            customScripts: ["html"],
            nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
            nonGoogleScripts: ["customScripts", "html"],
            nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
        },
        Dz = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");

    function Ez() {
        var a = Fj("gtm.allowlist") || Fj("gtm.whitelist");
        a && U(9);
        ij && (a = ["google", "gtagfl", "lcl", "zone"]);
        Az.test(B.location && B.location.hostname) && (ij ? U(116) : (U(117), Fz && (a = [], window.console && window.console.log && window.console.log("GTM blocked. See go/13687728."))));
        var b = a && sb(lb(a), Bz),
            c = Fj("gtm.blocklist") || Fj("gtm.blacklist");
        c || (c = Fj("tagTypeBlacklist")) && U(3);
        c ? U(8) : c = [];
        Az.test(B.location && B.location.hostname) && (c = lb(c), c.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
        lb(c).indexOf("google") >= 0 && U(2);
        var d = c && sb(lb(c), Cz),
            e = {};
        return function(f) {
            var g = f && f[Le.ra];
            if (!g || typeof g !== "string") return !0;
            g = g.replace(/^_*/, "");
            if (e[g] !== void 0) return e[g];
            var k = sj[g] || [],
                m = !0;
            if (a) {
                var n;
                if (n = m) a: {
                    if (b.indexOf(g) < 0)
                        if (k && k.length > 0)
                            for (var p = 0; p < k.length; p++) {
                                if (b.indexOf(k[p]) < 0) {
                                    U(11);
                                    n = !1;
                                    break a
                                }
                            } else {
                                n = !1;
                                break a
                            }
                    n = !0
                }
                m = n
            }
            var q = !1;
            if (c) {
                var r = d.indexOf(g) >= 0;
                if (r) q = r;
                else {
                    var t = eb(d, k || []);
                    t && U(10);
                    q = t
                }
            }
            var v = !m || q;
            v || !(k.indexOf("sandboxedScripts") >= 0) || b && b.indexOf("sandboxedScripts") !==
                -1 || (v = eb(d, Dz));
            return e[g] = v
        }
    }
    var Fz = !1;
    Fz = !0;

    function Gz() {
        zk && uz(Kk(), function(a) {
            var b = wf(a.entityId),
                c;
            if (zf(b)) {
                var d = b[Le.ra];
                if (!d) throw Error("Error: No function name given for function call.");
                var e = nf[d];
                c = !!e && !!e.runInSiloedMode
            } else c = !!tz(b[Le.ra], 4);
            return c
        })
    };

    function Hz(a, b, c, d, e) {
        if (!Iz()) {
            var f = d.siloed ? Fk(a) : a;
            if (!Uk(f)) {
                Wk(f, d, e);
                var g = Jz(a),
                    k = T(140) ? function() {
                        vk().container[f] && (vk().container[f].state = 3);
                        Kz()
                    } : void 0;
                if (zj()) nc(yj() + "/" + g, void 0, k);
                else {
                    var m = tb(a, "GTM-"),
                        n = ek(),
                        p = c ? "/gtag/js" : "/gtm.js",
                        q = dk(b, p + g);
                    if (!q) {
                        var r = cj.Af + p;
                        n && gc && m && (r = gc.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
                        q = Qt("https://", "http://", r + g)
                    }
                    nc(q, void 0, k)
                }
            }
        }
    }

    function Kz() {
        Yk() || hb(Zk(), function(a, b) {
            Lz(a, b.transportUrl, b.context);
            U(92)
        })
    }

    function Lz(a, b, c, d) {
        if (!Iz()) {
            var e = c.siloed ? Fk(a) : a;
            if (!Vk(e))
                if (!T(140) && c.siloed || !Yk())
                    if (c.siloed && Xk({
                            ctid: e,
                            isDestination: !0
                        }), vk().destination[e] = {
                            state: 1,
                            context: c,
                            parent: Nk()
                        }, uk({
                            ctid: e,
                            isDestination: !0
                        }, d), zj()) nc(yj() + ("/gtd" + Jz(a, !0)));
                    else {
                        var f = "/gtag/destination" + Jz(a, !0),
                            g = dk(b, f);
                        g || (g = Qt("https://", "http://", cj.Af + f));
                        nc(g)
                    }
            else vk().destination[e] = {
                state: 0,
                transportUrl: b,
                context: c,
                parent: Nk()
            }, uk({
                ctid: e,
                isDestination: !0
            }, d), U(91)
        }
    }

    function Jz(a, b) {
        b = b === void 0 ? !1 : b;
        var c = "?id=" + encodeURIComponent(a) + "&l=" + cj.Lb;
        if (!tb(a, "GTM-") || b) c += "&cx=c";
        c += "&gtm=" + aq();
        ek() && (c += "&sign=" + cj.yh);
        var d = vj.C;
        d === 1 ? c += "&fps=fc" : d === 2 && (c += "&fps=fe");
        return c
    }

    function Iz() {
        if (Zp()) {
            return !0
        }
        return !1
    };
    var Mz = function() {
        this.C = 0;
        this.j = {}
    };
    Mz.prototype.addListener = function(a, b, c) {
        var d = ++this.C;
        this.j[a] = this.j[a] || {};
        this.j[a][String(d)] = {
            listener: b,
            Kb: c
        };
        return d
    };
    Mz.prototype.removeListener = function(a, b) {
        var c = this.j[a],
            d = String(b);
        if (!c || !c[d]) return !1;
        delete c[d];
        return !0
    };
    var Oz = function(a, b) {
        var c = [];
        hb(Nz.j[a], function(d, e) {
            c.indexOf(e.listener) < 0 && (e.Kb === void 0 || b.indexOf(e.Kb) >= 0) && c.push(e.listener)
        });
        return c
    };

    function Pz(a, b, c) {
        return {
            entityType: a,
            indexInOriginContainer: b,
            nameInOriginContainer: c,
            originContainerId: Ik()
        }
    };
    var Rz = function(a, b) {
            this.j = !1;
            this.K = [];
            this.eventData = {
                tags: []
            };
            this.P = !1;
            this.C = this.H = 0;
            Qz(this, a, b)
        },
        Sz = function(a, b, c, d) {
            if (ej.hasOwnProperty(b) || b === "__zone") return -1;
            var e = {};
            Uc(d) && (e = Vc(d, e));
            e.id = c;
            e.status = "timeout";
            return a.eventData.tags.push(e) - 1
        },
        Tz = function(a, b, c, d) {
            var e = a.eventData.tags[b];
            e && (e.status = c, e.executionTime = d)
        },
        Uz = function(a) {
            if (!a.j) {
                for (var b = a.K, c = 0; c < b.length; c++) b[c]();
                a.j = !0;
                a.K.length = 0
            }
        },
        Qz = function(a, b, c) {
            b !== void 0 && a.Ne(b);
            c && B.setTimeout(function() {
                    Uz(a)
                },
                Number(c))
        };
    Rz.prototype.Ne = function(a) {
        var b = this,
            c = qb(function() {
                G(function() {
                    a(Ik(), b.eventData)
                })
            });
        this.j ? c() : this.K.push(c)
    };
    var Vz = function(a) {
            a.H++;
            return qb(function() {
                a.C++;
                a.P && a.C >= a.H && Uz(a)
            })
        },
        Wz = function(a) {
            a.P = !0;
            a.C >= a.H && Uz(a)
        };
    var Xz = {};

    function Yz() {
        return B[Zz()]
    }

    function Zz() {
        return B.GoogleAnalyticsObject || "ga"
    }

    function bA() {
        var a = Ik();
    }

    function cA(a, b) {
        return function() {
            var c = Yz(),
                d = c && c.getByName && c.getByName(a);
            if (d) {
                var e = d.get("sendHitTask");
                d.set("sendHitTask", function(f) {
                    var g = f.get("hitPayload"),
                        k = f.get("hitCallback"),
                        m = g.indexOf("&tid=" + b) < 0;
                    m && (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0), f.set("hitCallback", void 0, !0));
                    e(f);
                    m && (f.set("hitPayload", g, !0), f.set("hitCallback", k, !0), f.set("_x_19", void 0, !0), e(f))
                })
            }
        }
    };
    var iA = ["es", "1"],
        jA = {},
        kA = {};

    function lA(a, b) {
        if (ok) {
            var c;
            c = b.match(/^(gtm|gtag)\./) ? encodeURIComponent(b) : "*";
            jA[a] = [
                ["e", c],
                ["eid", a]
            ];
            lo(a)
        }
    }

    function mA(a) {
        var b = a.eventId,
            c = a.Xc;
        if (!jA[b]) return [];
        var d = [];
        kA[b] || d.push(iA);
        d.push.apply(d, ua(jA[b]));
        c && (kA[b] = !0);
        return d
    };
    var nA = {},
        oA = {},
        pA = {};

    function qA(a, b, c, d) {
        ok && T(118) && ((d === void 0 ? 0 : d) ? (pA[b] = pA[b] || 0, ++pA[b]) : c !== void 0 ? (oA[a] = oA[a] || {}, oA[a][b] = Math.round(c)) : (nA[a] = nA[a] || {}, nA[a][b] = (nA[a][b] || 0) + 1))
    }

    function rA(a) {
        var b = a.eventId,
            c = a.Xc,
            d = nA[b] || {},
            e = [],
            f;
        for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
        c && delete nA[b];
        return e.length ? [
            ["md", e.join(".")]
        ] : []
    }

    function sA(a) {
        var b = a.eventId,
            c = a.Xc,
            d = oA[b] || {},
            e = [],
            f;
        for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
        c && delete oA[b];
        return e.length ? [
            ["mtd", e.join(".")]
        ] : []
    }

    function tA() {
        for (var a = [], b = l(Object.keys(pA)), c = b.next(); !c.done; c = b.next()) {
            var d = c.value;
            a.push("" + d + pA[d])
        }
        return a.length ? [
            ["mec", a.join(".")]
        ] : []
    };
    var uA = {},
        vA = {};

    function wA(a, b, c) {
        if (ok && b) {
            var d = ik(b);
            uA[a] = uA[a] || [];
            uA[a].push(c + d);
            var e = (zf(b) ? "1" : "2") + d;
            vA[a] = vA[a] || [];
            vA[a].push(e);
            lo(a)
        }
    }

    function xA(a) {
        var b = a.eventId,
            c = a.Xc,
            d = [],
            e = uA[b] || [];
        e.length && d.push(["tr", e.join(".")]);
        var f = vA[b] || [];
        f.length && d.push(["ti", f.join(".")]);
        c && (delete uA[b], delete vA[b]);
        return d
    };

    function yA(a, b, c, d) {
        var e = lf[a],
            f = zA(a, b, c, d);
        if (!f) return null;
        var g = Af(e[Le.dk], c, []);
        if (g && g.length) {
            var k = g[0];
            f = yA(k.index, {
                onSuccess: f,
                onFailure: k.qk === 1 ? b.terminate : f,
                terminate: b.terminate
            }, c, d)
        }
        return f
    }

    function zA(a, b, c, d) {
        function e() {
            function w() {
                Rl(3);
                var I = ob() - E;
                wA(c.id, f, "7");
                Tz(c.vc, C, "exception", I);
                T(103) && Ky(c, f, Sx.J.ek);
                D || (D = !0, k())
            }
            if (f[Le.Il]) k();
            else {
                var y = yf(f, c, []),
                    x = y[Le.Yk];
                if (x != null)
                    for (var A = 0; A < x.length; A++)
                        if (!W(x[A])) {
                            k();
                            return
                        }
                var C = Sz(c.vc, String(f[Le.ra]), Number(f[Le.Me]), y[Le.METADATA]),
                    D = !1;
                y.vtp_gtmOnSuccess = function() {
                    if (!D) {
                        D = !0;
                        var I = ob() - E;
                        wA(c.id, lf[a], "5");
                        Tz(c.vc, C, "success", I);
                        T(103) && Ky(c, f, Sx.J.gk);
                        g()
                    }
                };
                y.vtp_gtmOnFailure = function() {
                    if (!D) {
                        D = !0;
                        var I = ob() -
                            E;
                        wA(c.id, lf[a], "6");
                        Tz(c.vc, C, "failure", I);
                        T(103) && Ky(c, f, Sx.J.fk);
                        k()
                    }
                };
                y.vtp_gtmTagId = f.tag_id;
                y.vtp_gtmEventId = c.id;
                c.priorityId && (y.vtp_gtmPriorityId = c.priorityId);
                wA(c.id, f, "1");
                T(103) && Jy(c, f);
                var E = ob();
                try {
                    Bf(y, {
                        event: c,
                        index: a,
                        type: 1
                    })
                } catch (I) {
                    w(I)
                }
                T(103) && Ky(c, f, Sx.J.hk)
            }
        }
        var f = lf[a],
            g = b.onSuccess,
            k = b.onFailure,
            m = b.terminate;
        if (c.isBlocked(f)) return null;
        var n = Af(f[Le.ik], c, []);
        if (n && n.length) {
            var p = n[0],
                q = yA(p.index, {
                    onSuccess: g,
                    onFailure: k,
                    terminate: m
                }, c, d);
            if (!q) return null;
            g = q;
            k = p.qk ===
                2 ? m : q
        }
        if (f[Le.Tj] || f[Le.Kl]) {
            var r = f[Le.Tj] ? mf : c.An,
                t = g,
                v = k;
            if (!r[a]) {
                var u = AA(a, r, qb(e));
                g = u.onSuccess;
                k = u.onFailure
            }
            return function() {
                r[a](t, v)
            }
        }
        return e
    }

    function AA(a, b, c) {
        var d = [],
            e = [];
        b[a] = BA(d, e, c);
        return {
            onSuccess: function() {
                b[a] = CA;
                for (var f = 0; f < d.length; f++) d[f]()
            },
            onFailure: function() {
                b[a] = DA;
                for (var f = 0; f < e.length; f++) e[f]()
            }
        }
    }

    function BA(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }

    function CA(a) {
        a()
    }

    function DA(a, b) {
        b()
    };
    var GA = function(a, b) {
        for (var c = [], d = 0; d < lf.length; d++)
            if (a[d]) {
                var e = lf[d];
                var f = Vz(b.vc);
                try {
                    var g = yA(d, {
                        onSuccess: f,
                        onFailure: f,
                        terminate: f
                    }, b, d);
                    if (g) {
                        var k = e[Le.ra];
                        if (!k) throw Error("Error: No function name given for function call.");
                        var m = nf[k];
                        c.push({
                            Ok: d,
                            Dk: (m ? m.priorityOverride || 0 : 0) || tz(e[Le.ra], 1) || 0,
                            execute: g
                        })
                    } else EA(d, b), f()
                } catch (p) {
                    f()
                }
            }
        c.sort(FA);
        for (var n = 0; n < c.length; n++) c[n].execute();
        return c.length >
            0
    };

    function HA(a, b) {
        if (!Nz) return !1;
        var c = a["gtm.triggers"] && String(a["gtm.triggers"]),
            d = Oz(a.event, c ? String(c).split(",") : []);
        if (!d.length) return !1;
        for (var e = 0; e < d.length; ++e) {
            var f = Vz(b);
            try {
                d[e](a, f)
            } catch (g) {
                f()
            }
        }
        return !0
    }

    function FA(a, b) {
        var c, d = b.Dk,
            e = a.Dk;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (c !== 0) f = c;
        else {
            var g = a.Ok,
                k = b.Ok;
            f = g > k ? 1 : g < k ? -1 : 0
        }
        return f
    }

    function EA(a, b) {
        if (ok) {
            var c = function(d) {
                var e = b.isBlocked(lf[d]) ? "3" : "4",
                    f = Af(lf[d][Le.dk], b, []);
                f && f.length && c(f[0].index);
                wA(b.id, lf[d], e);
                var g = Af(lf[d][Le.ik], b, []);
                g && g.length && c(g[0].index)
            };
            c(a)
        }
    }
    var IA = !1,
        Nz;

    function JA() {
        Nz || (Nz = new Mz);
        return Nz
    }

    function KA(a) {
        var b = a["gtm.uniqueEventId"],
            c = a["gtm.priorityId"],
            d = a.event;
        if (T(103)) {}
        if (d === "gtm.js") {
            if (IA) return !1;
            IA = !0
        }
        var e = !1,
            f = xz(),
            g = Vc(a, null);
        if (!f.every(function(t) {
                return t({
                    originalEventData: g
                })
            })) {
            if (d !== "gtm.js" && d !== "gtm.init" && d !== "gtm.init_consent") return !1;
            e = !0
        }
        lA(b, d);
        var k = a.eventCallback,
            m = a.eventTimeout,
            n = {
                id: b,
                priorityId: c,
                name: d,
                isBlocked: LA(g, e),
                An: [],
                logMacroError: function() {
                    U(6);
                    Rl(0)
                },
                cachedModelValues: MA(),
                vc: new Rz(function() {
                    if (T(103)) {}
                    k &&
                        k.apply(k, Array.prototype.slice.call(arguments, 0))
                }, m),
                originalEventData: g
            };
        T(118) && ok && (n.reportMacroDiscrepancy = qA);
        T(103) && Fy(n.id, n.name);
        var p = Hf(n);
        T(103) && Gy(n.id, n.name);
        e && (p = NA(p));
        if (T(103)) {}
        var q = GA(p, n),
            r = HA(a, n.vc);
        Wz(n.vc);
        d !== "gtm.js" && d !== "gtm.sync" || bA();
        return OA(p, q) || r
    }

    function MA() {
        var a = {};
        a.event = Kj("event", 1);
        a.ecommerce = Kj("ecommerce", 1);
        a.gtm = Kj("gtm");
        a.eventModel = Kj("eventModel");
        return a
    }

    function LA(a, b) {
        var c = Ez();
        return function(d) {
            if (c(d)) return !0;
            var e = d && d[Le.ra];
            if (!e || typeof e !== "string") return !0;
            e = e.replace(/^_*/, "");
            var f, g = Kk();
            f = vz().getRestrictions(0, g);
            var k = a;
            b && (k = Vc(a, null), k["gtm.uniqueEventId"] = Number.MAX_SAFE_INTEGER);
            for (var m = sj[e] || [], n = l(f), p = n.next(); !p.done; p = n.next()) {
                var q = p.value;
                try {
                    if (!q({
                            entityId: e,
                            securityGroups: m,
                            originalEventData: k
                        })) return !0
                } catch (r) {
                    return !0
                }
            }
            return !1
        }
    }

    function NA(a) {
        for (var b = [], c = 0; c < a.length; c++)
            if (a[c]) {
                var d = String(lf[c][Le.ra]);
                if (dj[d] || lf[c][Le.Ll] !== void 0 || tz(d, 2)) b[c] = !0
            }
        return b
    }

    function OA(a, b) {
        if (!b) return b;
        for (var c = 0; c < a.length; c++)
            if (a[c] && lf[c] && !ej[String(lf[c][Le.ra])]) return !0;
        return !1
    };

    function PA() {
        T(8) && JA().addListener("gtm.init", function(a, b) {
            vj.X = !0;
            ll();
            b()
        })
    };

    function QA() {
        var a, b = Yj(B.location.href);
        (a = b.hostname + b.pathname) && hl("dl", encodeURIComponent(a));
        var c;
        var d = Qf.ctid;
        if (d) {
            var e = yk.Ge ? 1 : 0,
                f, g = Mk(Nk());
            f = g && g.context;
            c = d + ";" + Qf.canonicalContainerId + ";" + (f && f.fromContainerExecution ? 1 : 0) + ";" + (f && f.source || 0) + ";" + e
        } else c = void 0;
        var k = c;
        k && hl("tdp", k);
        var m = hp(!0);
        m !== void 0 && hl("frm", String(m))
    };
    var RA = !1,
        SA = 0,
        TA = [];

    function UA(a) {
        if (!RA) {
            var b = F.createEventObject,
                c = F.readyState === "complete",
                d = F.readyState === "interactive";
            if (!a || a.type !== "readystatechange" || c || !b && d) {
                RA = !0;
                for (var e = 0; e < TA.length; e++) G(TA[e])
            }
            TA.push = function() {
                for (var f = ya.apply(0, arguments), g = 0; g < f.length; g++) G(f[g]);
                return 0
            }
        }
    }

    function VA() {
        if (!RA && SA < 140) {
            SA++;
            try {
                var a, b;
                (b = (a = F.documentElement).doScroll) == null || b.call(a, "left");
                UA()
            } catch (c) {
                B.setTimeout(VA, 50)
            }
        }
    }

    function WA() {
        RA = !1;
        SA = 0;
        if (F.readyState === "interactive" && !F.createEventObject || F.readyState === "complete") UA();
        else {
            tc(F, "DOMContentLoaded", UA);
            tc(F, "readystatechange", UA);
            if (F.createEventObject && F.documentElement.doScroll) {
                var a = !0;
                try {
                    a = !B.frameElement
                } catch (b) {}
                a && VA()
            }
            tc(B, "load", UA)
        }
    }

    function XA(a) {
        RA ? a() : TA.push(a)
    };
    var YA = 0;
    var ZA = {},
        $A = {};

    function aB(a, b) {
        for (var c = [], d = [], e = {}, f = 0; f < a.length; e = {
                li: void 0,
                Th: void 0
            }, f++) {
            var g = a[f];
            if (g.indexOf("-") >= 0) {
                if (e.li = fn(g, b), e.li) {
                    var k = Ak ? Ak : Hk();
                    cb(k, function(r) {
                        return function(t) {
                            return r.li.destinationId === t
                        }
                    }(e)) ? c.push(g) : d.push(g)
                }
            } else {
                var m = ZA[g] || [];
                e.Th = {};
                m.forEach(function(r) {
                    return function(t) {
                        r.Th[t] = !0
                    }
                }(e));
                for (var n = Dk(), p = 0; p < n.length; p++)
                    if (e.Th[n[p]]) {
                        c = c.concat(Gk());
                        break
                    }
                var q = $A[g] || [];
                q.length && (c = c.concat(q))
            }
        }
        return {
            Xm: c,
            bn: d
        }
    }

    function bB(a) {
        hb(ZA, function(b, c) {
            var d = c.indexOf(a);
            d >= 0 && c.splice(d, 1)
        })
    }

    function cB(a) {
        hb($A, function(b, c) {
            var d = c.indexOf(a);
            d >= 0 && c.splice(d, 1)
        })
    };
    var dB = "HA GF G UA AW DC MC".split(" "),
        eB = !1,
        fB = !1;

    function gB(a, b) {
        a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {
            value: Tm()
        });
        b.eventId = a["gtm.uniqueEventId"];
        b.priorityId = a["gtm.priorityId"];
        return {
            eventId: b.eventId,
            priorityId: b.priorityId
        }
    }
    var hB = void 0,
        iB = void 0;

    function jB(a, b, c) {
        var d = Vc(a, null);
        d.eventId = void 0;
        d.inheritParentConfig = void 0;
        Object.keys(b).some(function(f) {
            return b[f] !== void 0
        }) && U(136);
        var e = Vc(b, null);
        Vc(c, e);
        su(ou(Dk()[0], e), a.eventId, d)
    }

    function kB(a) {
        for (var b = l([Q.g.Jc, Q.g.Cb]), c = b.next(); !c.done; c = b.next()) {
            var d = c.value,
                e = a && a[d] || to.j[d];
            if (e) return e
        }
    }
    var lB = {
            config: function(a, b) {
                var c = gB(a, b);
                if (!(a.length < 2) && z(a[1])) {
                    var d = {};
                    if (a.length > 2) {
                        if (a[2] !== void 0 && !Uc(a[2]) || a.length > 3) return;
                        d = a[2]
                    }
                    var e = fn(a[1], b.isGtmEvent);
                    if (e) {
                        var f, g, k;
                        a: {
                            if (!yk.Ge) {
                                var m = Mk(Nk());
                                if ($k(m)) {
                                    var n = m.parent,
                                        p = n.isDestination;
                                    k = {
                                        kn: Mk(n),
                                        Wm: p
                                    };
                                    break a
                                }
                            }
                            k = void 0
                        }
                        var q = k;
                        q && (f = q.kn, g = q.Wm);
                        lA(c.eventId, "gtag.config");
                        var r = e.destinationId,
                            t = e.id !== r;
                        if (t ? Gk().indexOf(r) === -1 : Dk().indexOf(r) === -1) {
                            if (!b.inheritParentConfig && !d[Q.g.Rb]) {
                                var v = kB(d);
                                if (t) Lz(r, v, {
                                    source: 2,
                                    fromContainerExecution: b.fromContainerExecution
                                });
                                else if (f !== void 0 && f.containers.indexOf(r) !== -1) {
                                    var u = d;
                                    hB ? jB(b, u, hB) : iB || (iB = Vc(u, null))
                                } else Hz(r, v, !0, {
                                    source: 2,
                                    fromContainerExecution: b.fromContainerExecution
                                })
                            }
                        } else {
                            if (f && (U(128), g && U(130), b.inheritParentConfig)) {
                                var w;
                                var y = d;
                                iB ? (jB(b, iB, y), w = !1) : (!y[Q.g.rc] && gj && hB || (hB = Vc(y, null)), w = !0);
                                w && f.containers && f.containers.join(",");
                                return
                            }
                            pk && (YA === 1 && (fl.mcc = !1), YA = 2);
                            if (gj && !t && !d[Q.g.rc]) {
                                var x = fB;
                                fB = !0;
                                if (x) return
                            }
                            eB || U(43);
                            if (!b.noTargetGroup)
                                if (t) {
                                    cB(e.id);
                                    var A = e.id,
                                        C = d[Q.g.ye] || "default";
                                    C = String(C).split(",");
                                    for (var D = 0; D < C.length; D++) {
                                        var E = $A[C[D]] || [];
                                        $A[C[D]] = E;
                                        E.indexOf(A) < 0 && E.push(A)
                                    }
                                } else {
                                    bB(e.id);
                                    var I = e.id,
                                        H = d[Q.g.ye] || "default";
                                    H = H.toString().split(",");
                                    for (var O = 0; O < H.length; O++) {
                                        var K = ZA[H[O]] || [];
                                        ZA[H[O]] = K;
                                        K.indexOf(I) < 0 && K.push(I)
                                    }
                                }
                            delete d[Q.g.ye];
                            var Z = b.eventMetadata || {};
                            Z.hasOwnProperty("is_external_event") || (Z.is_external_event = !b.fromContainerExecution);
                            b.eventMetadata = Z;
                            delete d[Q.g.ud];
                            for (var ca = t ? [e.id] : Gk(), ba = 0; ba < ca.length; ba++) {
                                var aa =
                                    d,
                                    P = ca[ba],
                                    ma = Vc(b, null),
                                    ja = fn(P, ma.isGtmEvent);
                                ja && to.push("config", [aa], ja, ma)
                            }
                        }
                    }
                }
            },
            consent: function(a, b) {
                if (a.length === 3) {
                    U(39);
                    var c = gB(a, b),
                        d = a[1],
                        e;
                    if (T(135)) {
                        var f = {},
                            g = Rt(a[2]),
                            k;
                        for (k in g)
                            if (g.hasOwnProperty(k)) {
                                var m = g[k];
                                f[k] = k === Q.g.Yd ? Array.isArray(m) ? NaN : Number(m) : k === Q.g.sb ? (Array.isArray(m) ? m : [m]).map(St) : Tt(m)
                            }
                        e = f
                    } else e = a[2];
                    var n = e;
                    b.fromContainerExecution || (n[Q.g.O] && U(139), n[Q.g.sa] && U(140));
                    d === "default" ? Bm(n) : d === "update" ? Dm(n, c) : d === "declare" && b.fromContainerExecution && Am(n)
                }
            },
            event: function(a, b) {
                var c = a[1];
                if (!(a.length < 2) && z(c)) {
                    var d = void 0;
                    if (a.length > 2) {
                        if (!Uc(a[2]) && a[2] !== void 0 || a.length > 3) return;
                        d = a[2]
                    }
                    var e = d,
                        f = {},
                        g = (f.event = c, f);
                    e && (g.eventModel = Vc(e, null), e[Q.g.ud] && (g.eventCallback = e[Q.g.ud]), e[Q.g.ve] && (g.eventTimeout = e[Q.g.ve]));
                    var k = gB(a, b),
                        m = k.eventId,
                        n = k.priorityId;
                    g["gtm.uniqueEventId"] = m;
                    n && (g["gtm.priorityId"] = n);
                    if (c === "optimize.callback") return g.eventModel = g.eventModel || {}, g;
                    var p;
                    var q = d,
                        r = q && q[Q.g.oc];
                    r === void 0 && (r = Fj(Q.g.oc, 2), r === void 0 && (r =
                        "default"));
                    if (z(r) || Array.isArray(r)) {
                        var t;
                        t = b.isGtmEvent ? z(r) ? [r] : r : r.toString().replace(/\s+/g, "").split(",");
                        var v = aB(t, b.isGtmEvent),
                            u = v.Xm,
                            w = v.bn;
                        if (w.length)
                            for (var y = kB(q), x = 0; x < w.length; x++) {
                                var A = fn(w[x], b.isGtmEvent);
                                if (A) {
                                    var C = A.destinationId,
                                        D;
                                    if (D = T(138)) {
                                        var E;
                                        if (!(E = tb(C, "siloed_"))) {
                                            var I = A.destinationId,
                                                H = vk().destination[I];
                                            E = !!H && H.state === 0
                                        }
                                        D = E
                                    }
                                    D || Lz(C, y, {
                                        source: 3,
                                        fromContainerExecution: b.fromContainerExecution
                                    })
                                }
                            }
                        p = gn(u, b.isGtmEvent)
                    } else p = void 0;
                    var O = p;
                    if (O) {
                        lA(m, c);
                        for (var K = [], Z = 0; Z < O.length; Z++) {
                            var ca = O[Z],
                                ba = Vc(b, null);
                            if (dB.indexOf(Ok(ca.prefix)) !== -1) {
                                var aa = Vc(d, null),
                                    P = ba.eventMetadata || {};
                                P.hasOwnProperty("is_external_event") || (P.is_external_event = !ba.fromContainerExecution);
                                ba.eventMetadata = P;
                                delete aa[Q.g.ud];
                                uo(c, aa, ca.id, ba);
                                pk && P.source_canonical_id === void 0 && YA === 0 && (hl("mcc", "1"), YA = 1)
                            }
                            K.push(ca.id)
                        }
                        g.eventModel = g.eventModel || {};
                        O.length > 0 ? g.eventModel[Q.g.oc] = K.join() : delete g.eventModel[Q.g.oc];
                        eB || U(43);
                        b.noGtmEvent === void 0 && b.eventMetadata && b.eventMetadata.syn_or_mod &&
                            (b.noGtmEvent = !0);
                        g.eventModel[Q.g.nc] && (b.noGtmEvent = !0);
                        return b.noGtmEvent ? void 0 : g
                    }
                }
            },
            get: function(a, b) {
                U(53);
                if (a.length === 4 && z(a[1]) && z(a[2]) && $a(a[3])) {
                    var c = fn(a[1], b.isGtmEvent),
                        d = String(a[2]),
                        e = a[3];
                    if (c) {
                        eB || U(43);
                        var f = kB();
                        if (!cb(Gk(), function(k) {
                                return c.destinationId === k
                            })) Lz(c.destinationId, f, {
                            source: 4,
                            fromContainerExecution: b.fromContainerExecution
                        });
                        else if (dB.indexOf(Ok(c.prefix)) !== -1) {
                            gB(a, b);
                            var g = {};
                            Vc((g[Q.g.yb] = d, g[Q.g.Pb] = e, g), null);
                            vo(d, function(k) {
                                    G(function() {
                                        e(k)
                                    })
                                },
                                c.id, b)
                        }
                    }
                }
            },
            js: function(a, b) {
                if (a.length === 2 && a[1].getTime) {
                    eB = !0;
                    var c = gB(a, b),
                        d = c.eventId,
                        e = c.priorityId,
                        f = {};
                    return f.event = "gtm.js", f["gtm.start"] = a[1].getTime(), f["gtm.uniqueEventId"] = d, f["gtm.priorityId"] = e, f
                }
            },
            policy: function(a) {
                if (a.length === 3 && z(a[1]) && $a(a[2])) {
                    if (Nf(a[1], a[2]), U(74), a[1] === "all") {
                        U(75);
                        var b = !1;
                        try {
                            b = a[2](Ik(), "unknown", {})
                        } catch (c) {}
                        b || U(76)
                    }
                } else U(73)
            },
            set: function(a, b) {
                var c = void 0;
                a.length === 2 && Uc(a[1]) ? c = Vc(a[1], null) : a.length === 3 && z(a[1]) && (c = {}, Uc(a[2]) || Array.isArray(a[2]) ?
                    c[a[1]] = Vc(a[2], null) : c[a[1]] = a[2]);
                if (c) {
                    var d = gB(a, b),
                        e = d.eventId,
                        f = d.priorityId;
                    Vc(c, null);
                    var g = Vc(c, null);
                    to.push("set", [g], void 0, b);
                    c["gtm.uniqueEventId"] = e;
                    f && (c["gtm.priorityId"] = f);
                    delete c.event;
                    b.overwriteModelFields = !0;
                    return c
                }
            }
        },
        mB = {
            policy: !0
        };
    var oB = function(a) {
        if (nB(a)) return a;
        this.value = a
    };
    oB.prototype.getUntrustedMessageValue = function() {
        return this.value
    };
    var nB = function(a) {
        return !a || Sc(a) !== "object" || Uc(a) ? !1 : "getUntrustedMessageValue" in a
    };
    oB.prototype.getUntrustedMessageValue = oB.prototype.getUntrustedMessageValue;
    var pB = !1,
        qB = [];

    function rB() {
        if (!pB) {
            pB = !0;
            for (var a = 0; a < qB.length; a++) G(qB[a])
        }
    }

    function sB(a) {
        pB ? G(a) : qB.push(a)
    };
    var tB = 0,
        uB = {},
        vB = [],
        wB = [],
        xB = !1,
        yB = !1;

    function zB(a, b) {
        return a.messageContext.eventId - b.messageContext.eventId || a.messageContext.priorityId - b.messageContext.priorityId
    }

    function AB(a, b, c) {
        a.eventCallback = b;
        c && (a.eventTimeout = c);
        return BB(a)
    }

    function CB(a, b) {
        if (!ab(b) || b < 0) b = 0;
        var c = Om[cj.Lb],
            d = 0,
            e = !1,
            f = void 0;
        f = B.setTimeout(function() {
            e || (e = !0, a());
            f = void 0
        }, b);
        return function() {
            var g = c ? c.subscribers : 1;
            ++d === g && (f && (B.clearTimeout(f), f = void 0), e || (a(), e = !0))
        }
    }

    function DB(a, b) {
        var c = a._clear || b.overwriteModelFields;
        hb(a, function(e, f) {
            e !== "_clear" && (c && Ij(e), Ij(e, f))
        });
        pj || (pj = a["gtm.start"]);
        var d = a["gtm.uniqueEventId"];
        if (!a.event) return !1;
        typeof d !== "number" && (d = Tm(), a["gtm.uniqueEventId"] = d, Ij("gtm.uniqueEventId", d));
        return KA(a)
    }

    function EB(a) {
        if (a == null || typeof a !== "object") return !1;
        if (a.event) return !0;
        if (ib(a)) {
            var b = a[0];
            if (b === "config" || b === "event" || b === "js" || b === "get") return !0
        }
        return !1
    }

    function FB() {
        var a;
        if (wB.length) a = wB.shift();
        else if (vB.length) a = vB.shift();
        else return;
        var b;
        var c = a;
        if (xB || !EB(c.message)) b = c;
        else {
            xB = !0;
            var d = c.message["gtm.uniqueEventId"];
            typeof d !== "number" && (T(108) && (Tm(), Tm()), d = c.message["gtm.uniqueEventId"] = Tm());
            var e = {},
                f = {
                    message: (e.event = "gtm.init_consent", e["gtm.uniqueEventId"] = d - 2, e),
                    messageContext: {
                        eventId: d - 2
                    }
                },
                g = {},
                k = {
                    message: (g.event = "gtm.init", g["gtm.uniqueEventId"] = d - 1, g),
                    messageContext: {
                        eventId: d - 1
                    }
                };
            vB.unshift(k, c);
            T(8) || pk && ll();
            b = f
        }
        return b
    }

    function GB() {
        for (var a = !1, b; !yB && (b = FB());) {
            yB = !0;
            delete Cj.eventModel;
            Ej();
            var c = b,
                d = c.message,
                e = c.messageContext;
            if (d == null) yB = !1;
            else {
                e.fromContainerExecution && Jj();
                try {
                    if ($a(d)) try {
                        d.call(Gj)
                    } catch (v) {} else if (Array.isArray(d)) {
                        if (z(d[0])) {
                            var f = d[0].split("."),
                                g = f.pop(),
                                k = d.slice(1),
                                m = Fj(f.join("."), 2);
                            if (m != null) try {
                                m[g].apply(m, k)
                            } catch (v) {}
                        }
                    } else {
                        var n = void 0;
                        if (ib(d)) a: {
                            if (d.length && z(d[0])) {
                                var p = lB[d[0]];
                                if (p && (!e.fromContainerExecution || !mB[d[0]])) {
                                    n = p(d, e);
                                    break a
                                }
                            }
                            n = void 0
                        }
                        else n = d;
                        n && (a = DB(n, e) || a)
                    }
                } finally {
                    e.fromContainerExecution && Ej(!0);
                    var q = d["gtm.uniqueEventId"];
                    if (typeof q === "number") {
                        for (var r = uB[String(q)] || [], t = 0; t < r.length; t++) wB.push(HB(r[t]));
                        r.length && wB.sort(zB);
                        delete uB[String(q)];
                        q > tB && (tB = q)
                    }
                    yB = !1
                }
            }
        }
        return !a
    }

    function IB() {
        if (T(103)) {
            var a = !vj.H;
        }
        var b = GB();
        if (T(103)) {}
        try {
            var c = Ik(),
                d = B[cj.Lb].hide;
            if (d && d[c] !== void 0 && d.end) {
                d[c] = !1;
                var e = !0,
                    f;
                for (f in d)
                    if (d.hasOwnProperty(f) && d[f] ===
                        !0) {
                        e = !1;
                        break
                    }
                e && (d.end(), d.end = null)
            }
        } catch (g) {}
        return b
    }

    function vu(a) {
        if (tB < a.notBeforeEventId) {
            var b = String(a.notBeforeEventId);
            uB[b] = uB[b] || [];
            uB[b].push(a)
        } else wB.push(HB(a)), wB.sort(zB), G(function() {
            yB || GB()
        })
    }

    function HB(a) {
        return {
            message: a.message,
            messageContext: a.messageContext
        }
    }

    function JB() {
        function a(f) {
            var g = {};
            if (nB(f)) {
                var k = f;
                f = nB(k) ? k.getUntrustedMessageValue() : void 0;
                g.fromContainerExecution = !0
            }
            return {
                message: f,
                messageContext: g
            }
        }
        var b = hc(cj.Lb, []),
            c = Sm();
        c.pruned === !0 && U(83);
        uB = tu().get();
        uu();
        XA(function() {
            if (!c.gtmDom) {
                c.gtmDom = !0;
                var f = {};
                b.push((f.event = "gtm.dom", f))
            }
        });
        sB(function() {
            if (!c.gtmLoad) {
                c.gtmLoad = !0;
                var f = {};
                b.push((f.event = "gtm.load", f))
            }
        });
        c.subscribers = (c.subscribers || 0) + 1;
        var d = b.push;
        b.push = function() {
            var f;
            if (Om.SANDBOXED_JS_SEMAPHORE > 0) {
                f = [];
                for (var g = 0; g < arguments.length; g++) f[g] = new oB(arguments[g])
            } else f = [].slice.call(arguments, 0);
            var k = f.map(function(q) {
                return a(q)
            });
            vB.push.apply(vB, k);
            var m = d.apply(b, f),
                n = Math.max(100, Number("1000") || 300);
            if (this.length > n)
                for (U(4), c.pruned = !0; this.length > n;) this.shift();
            var p = typeof m !== "boolean" || m;
            return GB() && p
        };
        var e = b.slice(0).map(function(f) {
            return a(f)
        });
        vB.push.apply(vB, e);
        if (!vj.H) {
            if (T(103)) {}
            G(IB)
        }
    }
    var BB = function(a) {
        return B[cj.Lb].push(a)
    };

    function KB() {
        var a;
        var b = Lk();
        if (b)
            if (b.canonicalContainerId) a = b.canonicalContainerId;
            else {
                var c, d = b.scriptContainerId || ((c = b.destinations) == null ? void 0 : c[0]);
                a = d ? "_" + d : void 0
            }
        else a = void 0;
        var e = a;
        e && hl("pcid", e)
    };
    var LB = /^(https?:)?\/\//;

    function MB() {
        var a;
        var b = Mk(Nk());
        if (b) {
            for (; b.parent;) {
                var c = Mk(b.parent);
                if (!c) break;
                b = c
            }
            a = b
        } else a = void 0;
        var d = a;
        if (!d) U(144);
        else if (T(61) || d.canonicalContainerId) {
            var e;
            a: {
                var f, g = (f = d.scriptElement) == null ? void 0 : f.src;
                if (g) {
                    var k;
                    try {
                        var m;
                        k = (m = Hc()) == null ? void 0 : m.getEntriesByType("resource")
                    } catch (w) {}
                    if (k) {
                        for (var n = -1, p = l(k), q = p.next(); !q.done; q = p.next()) {
                            var r = q.value;
                            if (r.initiatorType === "script") {
                                n += 1;
                                var t = r.name,
                                    v = g;
                                T(60) && (t = t.replace(LB, ""), v = v.replace(LB, ""));
                                if (t === v) {
                                    e = n;
                                    break a
                                }
                            }
                        }
                        U(146)
                    } else U(145)
                }
                e =
                void 0
            }
            var u = e;
            u !== void 0 && (d.canonicalContainerId && hl("rtg", String(d.canonicalContainerId)), hl("slo", String(u)), hl("hlo", d.htmlLoadOrder || "-1"), hl("lst", String(d.loadScriptType || "0")))
        }
    };

    function gC() {};
    var hC = function() {};
    hC.prototype.toString = function() {
        return "undefined"
    };
    var iC = new hC;

    function pC(a, b) {
        function c(g) {
            var k = Yj(g),
                m = Sj(k, "protocol"),
                n = Sj(k, "host", !0),
                p = Sj(k, "port"),
                q = Sj(k, "path").toLowerCase().replace(/\/$/, "");
            if (m === void 0 || m === "http" && p === "80" || m === "https" && p === "443") m = "web", p = "default";
            return [m, n, p, q]
        }
        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
            if (d[f] !== e[f]) return !1;
        return !0
    }

    function qC(a) {
        return rC(a) ? 1 : 0
    }

    function rC(a) {
        var b = a.arg0,
            c = a.arg1;
        if (a.any_of && Array.isArray(c)) {
            for (var d = 0; d < c.length; d++) {
                var e = Vc(a, {});
                Vc({
                    arg1: c[d],
                    any_of: void 0
                }, e);
                if (qC(e)) return !0
            }
            return !1
        }
        switch (a["function"]) {
            case "_cn":
                return pg(b, c);
            case "_css":
                var f;
                a: {
                    if (b) try {
                        for (var g = 0; g < lg.length; g++) {
                            var k = lg[g];
                            if (b[k] != null) {
                                f = b[k](c);
                                break a
                            }
                        }
                    } catch (m) {}
                    f = !1
                }
                return f;
            case "_ew":
                return mg(b, c);
            case "_eq":
                return qg(b, c);
            case "_ge":
                return rg(b, c);
            case "_gt":
                return tg(b, c);
            case "_lc":
                return String(b).split(",").indexOf(String(c)) >=
                    0;
            case "_le":
                return sg(b, c);
            case "_lt":
                return ug(b, c);
            case "_re":
                return og(b, c, a.ignore_case);
            case "_sw":
                return vg(b, c);
            case "_um":
                return pC(b, c)
        }
        return !1
    };

    function sC() {
        var a;
        a = a === void 0 ? "" : a;
        var b, c;
        return ((b = data) == null ? 0 : (c = b.blob) == null ? 0 : c.hasOwnProperty(1)) ? String(data.blob[1]) : a
    };

    function tC() {
        var a = [
            ["cv", T(142) ? sC() : "9"],
            ["rv", cj.xh],
            ["tc", lf.filter(function(b) {
                return b
            }).length]
        ];
        cj.Je && a.push(["x", cj.Je]);
        wj() && a.push(["tag_exp", wj()]);
        return a
    };

    function uC() {
        T(57) && pk && B.addEventListener("securitypolicyviolation", function(a) {
            if (a.disposition === "enforce") {
                var b = Gx(a.effectiveDirective);
                if (b) {
                    var c;
                    var d = Fx(a.blockedURI);
                    c = d ? Dx[b][d] : void 0;
                    c && (ml[String(c.endpoint)] = !0, hl("csp", Object.keys(ml).join("~")))
                }
            }
        })
    };
    var vC = {},
        wC = {};

    function xC(a, b) {
        var c = yC(void 0);
        if (ok) {
            var d = String(c) + b;
            vC[a] = vC[a] || [];
            vC[a].push(d);
            wC[a] = wC[a] || [];
            wC[a].push("p" + b)
        }
    }

    function zC(a) {
        var b = a.eventId,
            c = a.Xc,
            d = [],
            e = vC[b] || [];
        e.length && d.push(["hf", e.join(".")]);
        var f = wC[b] || [];
        f.length && d.push(["ht", f.join(".")]);
        c && (delete vC[b], delete wC[b]);
        return d
    };

    function AC() {
        return !1
    }

    function BC() {
        var a = {};
        return function(b, c, d) {}
    };

    function CC() {
        var a = DC;
        return function(b, c, d) {
            var e = d && d.event;
            b === "__html" && T(107) || EC(c);
            var f = tb(b, "__cvt_") ? void 0 : 1,
                g = new Ma;
            hb(c, function(r, t) {
                var v = jd(t, void 0, f);
                v === void 0 && t !== void 0 && U(44);
                g.set(r, v)
            });
            a.j.j.C = Ff();
            var k = {
                lk: Uf(b),
                eventId: e == null ? void 0 : e.id,
                priorityId: e !== void 0 ? e.priorityId : void 0,
                Ne: e !== void 0 ? function(r) {
                    e.vc.Ne(r)
                } : void 0,
                qb: function() {
                    return b
                },
                log: function() {},
                om: {
                    index: d == null ? void 0 : d.index,
                    type: d == null ? void 0 : d.type,
                    name: d == null ? void 0 : d.name
                },
                tn: !!tz(b, 3),
                originalEventData: e ==
                    null ? void 0 : e.originalEventData
            };
            e && e.cachedModelValues && (k.cachedModelValues = {
                gtm: e.cachedModelValues.gtm,
                ecommerce: e.cachedModelValues.ecommerce
            });
            if (AC()) {
                var m = BC(),
                    n, p;
                k.Xa = {
                    yi: [],
                    Oe: {},
                    Gb: function(r, t, v) {
                        t === 1 && (n = r);
                        t === 7 && (p = v);
                        m(r, t, v)
                    },
                    rg: ph()
                };
                k.log = function(r) {
                    var t = ya.apply(1, arguments);
                    n && m(n, 4, {
                        level: r,
                        source: p,
                        message: t
                    })
                }
            }
            var q = Fe(a, k, [b, g]);
            a.j.j.C = void 0;
            q instanceof Aa && (q.type === "return" ? q = q.data : q = void 0);
            return J(q, void 0, f)
        }
    }

    function EC(a) {
        var b = a.gtmOnSuccess,
            c = a.gtmOnFailure;
        $a(b) && (a.gtmOnSuccess = function() {
            G(b)
        });
        $a(c) && (a.gtmOnFailure = function() {
            G(c)
        })
    };

    function FC(a) {}
    FC.F = "internal.addAdsClickIds";

    function GC(a, b) {
        var c = this;
    }
    GC.publicName = "addConsentListener";
    var HC = !1;

    function IC(a) {
        for (var b = 0; b < a.length; ++b)
            if (HC) try {
                a[b]()
            } catch (c) {
                U(77)
            } else a[b]()
    }

    function JC(a, b, c) {
        var d = this,
            e;
        return e
    }
    JC.F = "internal.addDataLayerEventListener";

    function KC(a, b, c) {}
    KC.publicName = "addDocumentEventListener";

    function LC(a, b, c, d) {}
    LC.publicName = "addElementEventListener";

    function MC(a) {
        return a.D.j
    };

    function NC(a) {}
    NC.publicName = "addEventCallback";

    function cD(a) {}
    cD.F = "internal.addFormAbandonmentListener";

    function dD(a, b, c, d) {}
    dD.F = "internal.addFormData";
    var eD = {},
        fD = [],
        gD = {},
        hD = 0,
        iD = 0;

    function pD(a, b) {}
    pD.F = "internal.addFormInteractionListener";

    function wD(a, b) {}
    wD.F = "internal.addFormSubmitListener";

    function BD(a) {}
    BD.F = "internal.addGaSendListener";

    function CD(a) {
        if (!a) return {};
        var b = a.om;
        return Pz(b.type, b.index, b.name)
    }

    function DD(a) {
        return a ? {
            originatingEntity: CD(a)
        } : {}
    };
    var FD = function(a, b, c) {
            ED().updateZone(a, b, c)
        },
        HD = function(a, b, c, d, e, f) {
            var g = ED();
            c = c && sb(c, GD);
            for (var k = g.createZone(a, c), m = 0; m < b.length; m++) {
                var n = String(b[m]);
                if (g.registerChild(n, Ik(), k)) {
                    var p = n,
                        q = a,
                        r = d,
                        t = e,
                        v = f;
                    if (tb(p, "GTM-")) Hz(p, void 0, !1, {
                        source: 1,
                        fromContainerExecution: !0
                    });
                    else {
                        var u = nu("js", nb());
                        Hz(p, void 0, !0, {
                            source: 1,
                            fromContainerExecution: !0
                        });
                        var w = {
                            originatingEntity: t,
                            inheritParentConfig: v
                        };
                        T(146) || su(u, q, w);
                        su(ou(p, r), q, w)
                    }
                }
            }
            return k
        },
        ED = function() {
            return Pm("zones", function() {
                return new ID
            })
        },
        JD = {
            zone: 1,
            cn: 1,
            css: 1,
            ew: 1,
            eq: 1,
            ge: 1,
            gt: 1,
            lc: 1,
            le: 1,
            lt: 1,
            re: 1,
            sw: 1,
            um: 1
        },
        GD = {
            cl: ["ecl"],
            ecl: ["cl"],
            ehl: ["hl"],
            gaawc: ["googtag"],
            hl: ["ehl"]
        },
        ID = function() {
            this.j = {};
            this.C = {};
            this.H = 0
        };
    h = ID.prototype;
    h.isActive = function(a, b) {
        for (var c, d = 0; d < a.length && !(c = this.j[a[d]]); d++);
        if (!c) return !0;
        if (!this.isActive([c.ki], b)) return !1;
        for (var e = 0; e < c.yf.length; e++)
            if (this.C[c.yf[e]].Nd(b)) return !0;
        return !1
    };
    h.getIsAllowedFn = function(a, b) {
        if (!this.isActive(a, b)) return function() {
            return !1
        };
        for (var c, d = 0; d < a.length &&
            !(c = this.j[a[d]]); d++);
        if (!c) return function() {
            return !0
        };
        for (var e = [], f = 0; f < c.yf.length; f++) {
            var g = this.C[c.yf[f]];
            g.Nd(b) && e.push(g)
        }
        if (!e.length) return function() {
            return !1
        };
        var k = this.getIsAllowedFn([c.ki], b);
        return function(m, n) {
            n = n || [];
            if (!k(m, n)) return !1;
            for (var p = 0; p < e.length; ++p)
                if (e[p].H(m, n)) return !0;
            return !1
        }
    };
    h.unregisterChild = function(a) {
        for (var b = 0; b < a.length; b++) delete this.j[a[b]]
    };
    h.createZone = function(a, b) {
        var c = String(++this.H);
        this.C[c] = new KD(a, b);
        return c
    };
    h.updateZone = function(a,
        b, c) {
        var d = this.C[a];
        d && d.K(b, c)
    };
    h.registerChild = function(a, b, c) {
        var d = this.j[a];
        if (!d && Om[a] || !d && Uk(a) || d && d.ki !== b) return !1;
        if (d) return d.yf.push(c), !1;
        this.j[a] = {
            ki: b,
            yf: [c]
        };
        return !0
    };
    var KD = function(a, b) {
        this.C = null;
        this.j = [{
            eventId: a,
            Nd: !0
        }];
        if (b) {
            this.C = {};
            for (var c = 0; c < b.length; c++) this.C[b[c]] = !0
        }
    };
    KD.prototype.K = function(a, b) {
        var c = this.j[this.j.length - 1];
        a <= c.eventId || c.Nd !== b && this.j.push({
            eventId: a,
            Nd: b
        })
    };
    KD.prototype.Nd = function(a) {
        for (var b = this.j.length - 1; b >= 0; b--)
            if (this.j[b].eventId <=
                a) return this.j[b].Nd;
        return !1
    };
    KD.prototype.H = function(a, b) {
        b = b || [];
        if (!this.C || JD[a] || this.C[a]) return !0;
        for (var c = 0; c < b.length; ++c)
            if (this.C[b[c]]) return !0;
        return !1
    };

    function LD(a) {
        var b = Om.zones;
        return b ? b.getIsAllowedFn(Dk(), a) : function() {
            return !0
        }
    }

    function MD() {
        var a = Om.zones;
        a && a.unregisterChild(Dk())
    }

    function ND() {
        wz(Kk(), function(a) {
            var b = a.originalEventData["gtm.uniqueEventId"],
                c = Om.zones;
            return c ? c.isActive(Dk(), b) : !0
        });
        uz(Kk(), function(a) {
            var b, c;
            b = a.entityId;
            c = a.securityGroups;
            return LD(Number(a.originalEventData["gtm.uniqueEventId"]))(b, c)
        })
    };
    var OD = function(a, b) {
        this.tagId = a;
        this.Qe = b
    };

    function PD(a, b) {
        var c = this,
            d = void 0;
        if (!M(a) || !Fg(b) && !Hg(b)) throw L(this.getName(), ["string", "Object|undefined"], arguments);
        var e = J(b, this.D, 1) || {},
            f = e.firstPartyUrl,
            g = e.onLoad,
            k = e.loadByDestination === !0,
            m = e.isGtmEvent === !0,
            n = e.siloed === !0;
        d = n ? Fk(a) : a;
        IC([function() {
            N(c, "load_google_tags", a, f)
        }]);
        if (k) {
            if (Vk(a)) return d
        } else if (Uk(a)) return d;
        var p = 6,
            q = MC(this);
        m && (p = 7);
        q.qb() === "__zone" && (p = 1);
        var r = {
                source: p,
                fromContainerExecution: !0,
                siloed: n
            },
            t = function(v) {
                uz(v, function(u) {
                    for (var w = vz().getExternalRestrictions(0, Kk()), y = l(w), x = y.next(); !x.done; x = y.next()) {
                        var A = x.value;
                        if (!A(u)) return !1
                    }
                    return !0
                }, !0);
                wz(v, function(u) {
                    for (var w = vz().getExternalRestrictions(1, Kk()), y = l(w), x = y.next(); !x.done; x = y.next()) {
                        var A = x.value;
                        if (!A(u)) return !1
                    }
                    return !0
                }, !0);
                g && g(new OD(a, v))
            };
        k ? Lz(a, f, r, t) : Hz(a, f, !tb(a, "GTM-"), r, t);
        g && q.qb() === "__zone" && HD(Number.MIN_SAFE_INTEGER, [a], null, {}, CD(MC(this)));
        return d
    }
    PD.F = "internal.loadGoogleTag";

    function QD(a) {
        return new bd("", function(b) {
            var c = this.evaluate(b);
            if (c instanceof bd) return new bd("", function() {
                var d = ya.apply(0, arguments),
                    e = this,
                    f = Vc(MC(this), null);
                f.eventId = a.eventId;
                f.priorityId = a.priorityId;
                f.originalEventData = a.originalEventData;
                var g = d.map(function(m) {
                        return e.evaluate(m)
                    }),
                    k = Ia(this.D);
                k.j = f;
                return c.hb.apply(c, [k].concat(ua(g)))
            })
        })
    };

    function RD(a, b, c) {
        var d = this;
    }
    RD.F = "internal.addGoogleTagRestriction";
    var SD = {},
        TD = [];

    function $D(a, b) {}
    $D.F = "internal.addHistoryChangeListener";

    function aE(a, b, c) {}
    aE.publicName = "addWindowEventListener";

    function bE(a, b) {
        return !0
    }
    bE.publicName = "aliasInWindow";

    function cE(a, b, c) {}
    cE.F = "internal.appendRemoteConfigParameter";

    function dE(a) {
        var b;
        return b
    }
    dE.publicName = "callInWindow";

    function eE(a) {}
    eE.publicName = "callLater";

    function fE(a) {}
    fE.F = "callOnDomReady";

    function gE(a) {}
    gE.F = "callOnWindowLoad";

    function hE(a, b) {
        var c;
        return c
    }
    hE.F = "internal.computeGtmParameter";

    function iE(a, b) {
        var c = this;
    }
    iE.F = "internal.consentScheduleFirstTry";

    function jE(a, b) {
        var c = this;
    }
    jE.F = "internal.consentScheduleRetry";

    function kE(a) {
        var b;
        return b
    }
    kE.F = "internal.copyFromCrossContainerData";

    function lE(a, b) {
        var c;
        var d = jd(c, this.D, tb(MC(this).qb(), "__cvt_") ? 2 : 1);
        d === void 0 && c !== void 0 && U(45);
        return d
    }
    lE.publicName = "copyFromDataLayer";

    function mE(a) {
        var b = void 0;
        return b
    }
    mE.F = "internal.copyFromDataLayerCache";

    function nE(a) {
        var b;
        return b
    }
    nE.publicName = "copyFromWindow";

    function oE(a) {
        var b = void 0;
        return jd(b, this.D, 1)
    }
    oE.F = "internal.copyKeyFromWindow";
    var pE = function(a, b, c) {
            var d = this;
            this.eventName = b;
            this.m = c;
            this.j = {};
            this.isAborted = !1;
            this.TEST_ONLY = {
                getMetadata: function() {
                    return d.metadata
                },
                setMetadata: function(e) {
                    d.metadata = e
                },
                getHitData: function() {
                    return d.j
                },
                setHitData: function(e) {
                    d.j = e
                }
            };
            this.target = a;
            this.metadata = Vc(c.eventMetadata || {}, {})
        },
        px = function(a, b, c) {
            a.j[b] = c
        },
        qE = function(a, b) {
            b = b === void 0 ? {} : b;
            return Vc(a.j, b)
        };
    pE.prototype.copyToHitData = function(a, b, c) {
        var d = V(this.m, a);
        d === void 0 && (d = b);
        if (d !== void 0 && c !== void 0 && z(d) && T(93)) try {
            d = c(d)
        } catch (e) {}
        d !== void 0 && (this.j[a] = d)
    };
    var rE = function(a, b, c) {
            a.metadata[b] = c
        },
        sE = function(a, b) {
            b = b === void 0 ? {} : b;
            return Vc(a.metadata, b)
        },
        Mv = function(a, b, c) {
            var d = a.target.destinationId;
            T(137) && !zk && (d = Ok(d));
            var e = Au(d);
            return e && e[b] !== void 0 ? e[b] : c
        };

    function tE(a, b) {
        var c;
        return c
    }
    tE.F = "internal.copyPreHit";

    function uE(a, b) {
        var c = null;
        if (!M(a) || !M(b)) throw L(this.getName(), ["string", "string"], arguments);
        N(this, "access_globals", "readwrite", a);
        N(this, "access_globals", "readwrite", b);
        var d = [B, F],
            e = a.split("."),
            f = vb(e, d),
            g = e[e.length - 1];
        if (f === void 0) throw Error("Path " + a + " does not exist.");
        var k = f[g];
        if (k) return $a(k) ? jd(k, this.D, 2) : null;
        var m;
        k = function() {
            if (!$a(m.push)) throw Error("Object at " + b + " in window is not an array.");
            m.push.call(m, arguments)
        };
        f[g] = k;
        var n = b.split("."),
            p = vb(n, d),
            q = n[n.length - 1];
        if (p === void 0) throw Error("Path " + n + " does not exist.");
        m = p[q];
        m === void 0 && (m = [], p[q] = m);
        c = function() {
            k.apply(k, Array.prototype.slice.call(arguments, 0))
        };
        return jd(c, this.D, 2)
    }
    uE.publicName = "createArgumentsQueue";

    function vE(a) {
        return jd(function(c) {
            var d = Yz();
            if (typeof c === "function") d(function() {
                c(function(f, g, k) {
                    var m =
                        Yz(),
                        n = m && m.getByName && m.getByName(f);
                    return (new B.gaplugins.Linker(n)).decorate(g, k)
                })
            });
            else if (Array.isArray(c)) {
                var e = String(c[0]).split(".");
                b[e.length === 1 ? e[0] : e[1]] && d.apply(null, c)
            } else if (c === "isLoaded") return !!d.loaded
        }, this.D, 1)
    }
    vE.F = "internal.createGaCommandQueue";

    function wE(a) {
        return jd(function() {
            if (!$a(e.push)) throw Error("Object at " + a + " in window is not an array.");
            e.push.apply(e, Array.prototype.slice.call(arguments, 0))
        }, this.D, tb(MC(this).qb(),
            "__cvt_") ? 2 : 1)
    }
    wE.publicName = "createQueue";

    function xE(a, b) {
        var c = null;
        return c
    }
    xE.F = "internal.createRegex";

    function yE() {
        var a = {};
        return a
    };

    function zE(a) {}
    zE.F = "internal.declareConsentState";

    function AE(a) {
        var b = "";
        return b
    }
    AE.F = "internal.decodeUrlHtmlEntities";

    function BE(a, b, c) {
        var d;
        return d
    }
    BE.F = "internal.decorateUrlWithGaCookies";

    function CE() {}
    CE.F = "internal.deferCustomEvents";

    function DE(a) {
        var b;
        return b
    }
    DE.F = "internal.detectUserProvidedData";

    function IE(a, b) {
        return f
    }
    IE.F = "internal.enableAutoEventOnClick";

    function QE(a, b) {
        return p
    }
    QE.F = "internal.enableAutoEventOnElementVisibility";

    function RE() {}
    RE.F = "internal.enableAutoEventOnError";
    var SE = {},
        TE = [],
        UE = {},
        VE = 0,
        WE = 0;

    function bF(a, b) {
        var c = this;
        return d
    }
    bF.F = "internal.enableAutoEventOnFormInteraction";

    function gF(a, b) {
        var c = this;
        return f
    }
    gF.F = "internal.enableAutoEventOnFormSubmit";

    function lF() {
        var a = this;
    }
    lF.F = "internal.enableAutoEventOnGaSend";
    var mF = {},
        nF = [];

    function uF(a, b) {
        var c = this;
        return f
    }
    uF.F = "internal.enableAutoEventOnHistoryChange";
    var vF = ["http://", "https://", "javascript:", "file://"];

    function zF(a, b) {
        var c = this;
        return k
    }
    zF.F = "internal.enableAutoEventOnLinkClick";
    var AF, BF;

    function MF(a, b) {
        var c = this;
        return d
    }
    MF.F = "internal.enableAutoEventOnScroll";

    function NF(a) {
        return function() {
            if (a.limit && a.gi >= a.limit) a.pg && B.clearInterval(a.pg);
            else {
                a.gi++;
                var b = ob();
                BB({
                    event: a.eventName,
                    "gtm.timerId": a.pg,
                    "gtm.timerEventNumber": a.gi,
                    "gtm.timerInterval": a.interval,
                    "gtm.timerLimit": a.limit,
                    "gtm.timerStartTime": a.Nk,
                    "gtm.timerCurrentTime": b,
                    "gtm.timerElapsedTime": b - a.Nk,
                    "gtm.triggers": a.Gn
                })
            }
        }
    }

    function OF(a, b) {
        return f
    }
    OF.F = "internal.enableAutoEventOnTimer";
    var Yb = wa(["data-gtm-yt-inspected-"]),
        QF = ["www.youtube.com", "www.youtube-nocookie.com"],
        RF, SF = !1;

    function bG(a, b) {
        var c = this;
        return e
    }
    bG.F = "internal.enableAutoEventOnYouTubeActivity";
    SF = !1;

    function cG(a, b) {
        if (!M(a) || !Gg(b)) throw L(this.getName(), ["string", "Object|undefined"], arguments);
        var c = b ? J(b) : {},
            d = a,
            e = !1;
        return e
    }
    cG.F = "internal.evaluateBooleanExpression";
    var dG;

    function eG(a) {
        var b = !1;
        return b
    }
    eG.F = "internal.evaluateMatchingRules";

    function MG() {
        return Ip(7) && Ip(9) && Ip(10)
    };

    function HH(a, b, c, d) {}
    HH.F = "internal.executeEventProcessor";

    function IH(a) {
        var b;
        return jd(b, this.D, 1)
    }
    IH.F = "internal.executeJavascriptString";

    function JH(a) {
        var b;
        return b
    };

    function KH(a) {
        var b = {};
        return jd(b)
    }
    KH.F = "internal.getAdsCookieWritingOptions";

    function LH(a) {
        var b = !1;
        return b
    }
    LH.F = "internal.getAllowAdPersonalization";

    function MH(a, b) {
        b = b === void 0 ? !0 : b;
        var c;
        return c
    }
    MH.F = "internal.getAuid";
    var NH = null;

    function OH() {
        var a = new Ma;
        return a
    }
    OH.publicName = "getContainerVersion";

    function PH(a, b) {
        b = b === void 0 ? !0 : b;
        var c;
        return c
    }
    PH.publicName = "getCookieValues";

    function QH() {
        return Vl()
    }
    QH.F = "internal.getCountryCode";

    function RH() {
        var a = [];
        return jd(a)
    }
    RH.F = "internal.getDestinationIds";

    function SH(a) {
        var b = new Ma;
        return b
    }
    SH.F = "internal.getDeveloperIds";

    function TH(a, b) {
        var c = null;
        return c
    }
    TH.F = "internal.getElementAttribute";

    function UH(a) {
        var b = null;
        return b
    }
    UH.F = "internal.getElementById";

    function VH(a) {
        var b = "";
        return b
    }
    VH.F = "internal.getElementInnerText";

    function WH(a, b) {
        var c = null;
        return jd(c)
    }
    WH.F = "internal.getElementProperty";

    function XH(a) {
        var b;
        return b
    }
    XH.F = "internal.getElementValue";

    function YH(a) {
        var b = 0;
        return b
    }
    YH.F = "internal.getElementVisibilityRatio";

    function ZH(a) {
        var b = null;
        return b
    }
    ZH.F = "internal.getElementsByCssSelector";

    function $H(a) {
        var b;
        if (!M(a)) throw L(this.getName(), ["string"], arguments);
        N(this, "read_event_data", a);
        var c;
        a: {
            var d = a,
                e = MC(this).originalEventData;
            if (e) {
                for (var f = e, g = {}, k = {}, m = {}, n = [], p = d.split("\\\\"), q = 0; q < p.length; q++) {
                    for (var r = p[q].split("\\."), t = 0; t < r.length; t++) {
                        for (var v = r[t].split("."), u = 0; u < v.length; u++) n.push(v[u]), u !== v.length - 1 && n.push(m);
                        t !== r.length - 1 && n.push(k)
                    }
                    q !== p.length - 1 && n.push(g)
                }
                for (var w = [], y = "", x = l(n), A = x.next(); !A.done; A =
                    x.next()) {
                    var C = A.value;
                    C === m ? (w.push(y), y = "") : y = C === g ? y + "\\" : C === k ? y + "." : y + C
                }
                y && w.push(y);
                for (var D = l(w), E = D.next(); !E.done; E = D.next()) {
                    if (f == null) {
                        c = void 0;
                        break a
                    }
                    f = f[E.value]
                }
                c = f
            } else c = void 0
        }
        b = jd(c, this.D, 1);
        return b
    }
    $H.F = "internal.getEventData";
    var aI = {};
    aI.enableAWFledge = T(35);
    aI.enableAdsConversionValidation = T(20);
    aI.enableAdsSupernovaParams = T(31);
    aI.enableAutoPhoneAndAddressDetection = T(33);
    aI.enableAutoPiiOnPhoneAndAddress = T(34);
    aI.enableCachedEcommerceData = T(43);
    aI.enableCloudRecommentationsErrorLogging = T(44);
    aI.enableCloudRecommentationsSchemaIngestion = T(45);
    aI.enableCloudRetailInjectPurchaseMetadata = T(47);
    aI.enableCloudRetailLogging = T(46);
    aI.enableCloudRetailPageCategories = T(48);
    aI.enableConsentDisclosureActivity = T(50);
    aI.enableDCFledge = T(58);
    aI.enableDataLayerSearchExperiment = T(127);
    aI.enableDecodeUri = T(93);
    aI.enableDeferAllEnhancedMeasurement = T(59);
    aI.enableFormSkipValidation = T(86);
    aI.enableGa4OutboundClicksFix = T(96);
    aI.enableGaAdsConversions = T(120);
    aI.enableGaAdsConversionsClientId = T(119);
    aI.enableLimitedDataModes = T(111);
    aI.enableMerchantRenameForBasketData = T(114);
    aI.enableUnsiloedModeGtmTags = T(139);
    aI.enableUrlDecodeEventUsage = T(141);
    aI.enableZoneConfigInChildContainers = T(143);
    aI.useEnableAutoEventOnFormApis = T(155);

    function bI() {
        return jd(aI)
    }
    bI.F = "internal.getFlags";

    function cI() {
        return new gd(iC)
    }
    cI.F = "internal.getHtmlId";

    function dI(a) {
        var b;
        return b
    }
    dI.F = "internal.getIframingState";

    function eI(a, b) {
        var c = {};
        return jd(c)
    }
    eI.F = "internal.getLinkerValueFromLocation";

    function fI() {
        var a = new Ma;
        return a
    }
    fI.F = "internal.getPrivacyStrings";

    function gI(a, b) {
        var c;
        return c
    }
    gI.F = "internal.getProductSettingsParameter";

    function hI(a, b) {
        var c;
        return c
    }
    hI.publicName = "getQueryParameters";

    function iI(a, b) {
        var c;
        return c
    }
    iI.publicName = "getReferrerQueryParameters";

    function jI(a) {
        var b = "";
        return b
    }
    jI.publicName = "getReferrerUrl";

    function kI() {
        return Wl()
    }
    kI.F = "internal.getRegionCode";

    function lI(a, b) {
        var c;
        return c
    }
    lI.F = "internal.getRemoteConfigParameter";

    function mI() {
        var a = new Ma;
        a.set("width", 0);
        a.set("height", 0);
        return a
    }
    mI.F = "internal.getScreenDimensions";

    function nI() {
        var a = "";
        return a
    }
    nI.F = "internal.getTopSameDomainUrl";

    function oI() {
        var a = "";
        return a
    }
    oI.F = "internal.getTopWindowUrl";

    function pI(a) {
        var b = "";
        return b
    }
    pI.publicName = "getUrl";

    function qI() {
        N(this, "get_user_agent");
        return dc.userAgent
    }
    qI.F = "internal.getUserAgent";

    function rI() {
        var a;
        return a ? jd(yw(a)) : a
    }
    rI.F = "internal.getUserAgentClientHints";

    function zI() {
        return B.gaGlobal = B.gaGlobal || {}
    }

    function AI() {
        var a = zI();
        a.hid = a.hid || db();
        return a.hid
    }

    function BI(a, b) {
        var c = zI();
        if (c.vid === void 0 || b && !c.from_cookie) c.vid = a, c.from_cookie = b
    };

    function XI(a) {
        if (Pv(a) || zj()) a.j[Q.g.Fj] = Wl() || Vl();
        !Pv(a) && zj() && (a.j[Q.g.Oj] = "::")
    }

    function YI(a) {
        if (T(88) && zj()) {
            It(a);
            Jt(a, "cpf", Ut(V(a.m, Q.g.Fa)));
            var b = V(a.m, Q.g.Ob);
            Jt(a, "cu", b === !0 ? 1 : b === !1 ? 0 : void 0);
            Jt(a, "cf", Ut(V(a.m, Q.g.Qa)));
            Jt(a, "cd", tq(Tt(V(a.m, Q.g.La)), Tt(V(a.m, Q.g.mb))))
        }
    };
    var nJ = function(a) {
            this.H = a;
            this.j = ""
        },
        oJ = function(a, b) {
            a.C = b;
            return a
        },
        pJ = function(a, b) {
            b = a.j + b;
            for (var c = b.indexOf("\n\n"); c !== -1;) {
                var d = a,
                    e;
                a: {
                    var f = l(b.substring(0, c).split("\n")),
                        g = f.next().value,
                        k = f.next().value;
                    if (g.indexOf("event: message") === 0 && k.indexOf("data: ") === 0) try {
                        e = JSON.parse(k.substring(k.indexOf(":") + 1));
                        break a
                    } catch (H) {}
                    e = void 0
                }
                var m = d,
                    n = e;
                if (n) {
                    var p = n.send_pixel,
                        q = n.options,
                        r = m.H;
                    if (p) {
                        var t = p || [];
                        if (Array.isArray(t))
                            for (var v = Uc(q) ? q : {}, u = l(t), w = u.next(); !w.done; w = u.next()) r(w.value,
                                v)
                    }
                    var y = n.create_iframe,
                        x = n.options,
                        A = m.C;
                    if (y && A) {
                        var C = y || [];
                        if (Array.isArray(C))
                            for (var D = Uc(x) ? x : {}, E = l(C), I = E.next(); !I.done; I = E.next()) A(I.value, D)
                    }
                }
                b = b.substring(c + 2);
                c = b.indexOf("\n\n")
            }
            a.j = b
        };

    function qJ(a) {
        var b = a.search;
        return a.protocol + "//" + a.hostname + a.pathname + (b ? b + "&richsstsse" : "?richsstsse")
    };
    var dK = window,
        eK = document,
        fK = function(a) {
            var b = dK._gaUserPrefs;
            if (b && b.ioo && b.ioo() || eK.documentElement.hasAttribute("data-google-analytics-opt-out") || a && dK["ga-disable-" + a] === !0) return !0;
            try {
                var c = dK.external;
                if (c && c._gaUserPrefs && c._gaUserPrefs == "oo") return !0
            } catch (p) {}
            for (var d = [], e = String(eK.cookie).split(";"), f = 0; f < e.length; f++) {
                var g = e[f].split("="),
                    k = g[0].replace(/^\s*|\s*$/g, "");
                if (k && k == "AMP_TOKEN") {
                    var m = g.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                    m && (m = decodeURIComponent(m));
                    d.push(m)
                }
            }
            for (var n =
                    0; n < d.length; n++)
                if (d[n] == "$OPT_OUT") return !0;
            return eK.getElementById("__gaOptOutExtension") ? !0 : !1
        };

    function qK(a) {
        hb(a, function(c) {
            c.charAt(0) === "_" && delete a[c]
        });
        var b = a[Q.g.pb] || {};
        hb(b, function(c) {
            c.charAt(0) === "_" && delete b[c]
        })
    };

    function XK(a, b) {}

    function YK(a, b) {
        var c = function() {};
        return c
    }

    function ZK(a, b, c) {};
    var $K = YK;
    var aL = function(a, b, c) {
        for (var d = 0; d < b.length; d++) a.hasOwnProperty(b[d]) && (a[String(b[d])] = c(a[String(b[d])]))
    };

    function bL(a, b, c) {
        var d = this;
        if (!M(a) || !Gg(b) || !Gg(c)) throw L(this.getName(), ["string", "Object|undefined", "Object|undefined"], arguments);
        var e = b ? J(b) : {};
        IC([function() {
            return N(d, "configure_google_tags", a, e)
        }]);
        var f = c ? J(c) : {},
            g = MC(this);
        f.originatingEntity = CD(g);
        su(ou(a, e), g.eventId, f);
    }
    bL.F = "internal.gtagConfig";

    function cL() {
        var a = {};
        return a
    };

    function eL(a, b) {}
    eL.publicName = "gtagSet";

    function fL() {
        var a = {};
        return a
    };

    function gL(a, b) {}
    gL.publicName = "injectHiddenIframe";
    var yC = function() {
        var a = 0;
        return function(b) {
            switch (b) {
                case 1:
                    a |= 1;
                    break;
                case 2:
                    a |= 2;
                    break;
                case 3:
                    a |= 4
            }
            return a
        }
    }();

    function hL(a, b, c, d, e) {
        var f = this;
    }
    hL.F = "internal.injectHtml";
    var lL = {};

    function nL(a, b, c, d) {}
    var oL = {
            dl: 1,
            id: 1
        },
        pL = {};

    function qL(a, b, c, d) {}
    nL.publicName = "injectScript";
    qL.F = "internal.injectScript";

    function rL() {
        return $l()
    }
    rL.F = "internal.isAutoPiiEligible";

    function sL(a) {
        var b = !0;
        return b
    }
    sL.publicName = "isConsentGranted";

    function tL(a) {
        var b = !1;
        return b
    }
    tL.F = "internal.isDebugMode";

    function uL() {
        return Yl()
    }
    uL.F = "internal.isDmaRegion";

    function vL(a) {
        var b = !1;
        return b
    }
    vL.F = "internal.isEntityInfrastructure";

    function wL() {
        var a = !1;
        return a
    }
    wL.F = "internal.isLandingPage";

    function xL() {
        var a = kh(function(b) {
            MC(this).log("error", b)
        });
        a.publicName = "JSON";
        return a
    };

    function yL(a) {
        var b = void 0;
        return jd(b)
    }
    yL.F = "internal.legacyParseUrl";

    function zL() {
        return !1
    }
    var AL = {
        getItem: function(a) {
            var b = null;
            return b
        },
        setItem: function(a, b) {
            return !1
        },
        removeItem: function(a) {}
    };

    function BL() {
        try {
            N(this, "logging")
        } catch (c) {
            return
        }
        if (!console) return;
        for (var a = Array.prototype.slice.call(arguments, 0), b = 0; b < a.length; b++) a[b] = J(a[b], this.D);
        console.log.apply(console, a);
    }
    BL.publicName = "logToConsole";

    function CL(a, b) {}
    CL.F = "internal.mergeRemoteConfig";

    function DL(a, b, c) {
        c = c === void 0 ? !0 : c;
        var d = [];
        return jd(d)
    }
    DL.F = "internal.parseCookieValuesFromString";

    function EL(a) {
        var b = void 0;
        return b
    }
    EL.publicName = "parseUrl";

    function FL(a) {}
    FL.F = "internal.processAsNewEvent";

    function GL(a, b, c) {
        var d;
        return d
    }
    GL.F = "internal.pushToDataLayer";

    function HL(a) {
        var b = ya.apply(1, arguments),
            c = !1;
        return c
    }
    HL.publicName = "queryPermission";

    function IL(a) {
        var b = this;
    }
    IL.F = "internal.queueAdsTransmission";

    function JL() {
        var a = "";
        return a
    }
    JL.publicName = "readCharacterSet";

    function KL() {
        return cj.Lb
    }
    KL.F = "internal.readDataLayerName";

    function LL() {
        var a = "";
        return a
    }
    LL.publicName = "readTitle";

    function ML(a, b) {
        var c = this;
    }
    ML.F = "internal.registerCcdCallback";

    function NL(a) {
        return !0
    }
    NL.F = "internal.registerDestination";
    var OL = ["config", "event", "get", "set"];

    function PL(a, b, c) {}
    PL.F = "internal.registerGtagCommandListener";

    function QL(a, b) {
        var c = !1;
        return c
    }
    QL.F = "internal.removeDataLayerEventListener";

    function RL(a, b) {}
    RL.F = "internal.removeFormData";

    function SL() {}
    SL.publicName = "resetDataLayer";

    function TL(a, b, c) {
        var d = void 0;
        return d
    }
    TL.F = "internal.scrubUrlParams";

    function UL(a) {}
    UL.F = "internal.sendAdsHit";

    function VL(a, b, c, d) {}
    VL.F = "internal.sendGtagEvent";

    function WL(a, b, c) {}
    WL.publicName = "sendPixel";

    function XL(a, b) {}
    XL.F = "internal.setAnchorHref";

    function YL(a) {}
    YL.F = "internal.setContainerConsentDefaults";

    function ZL(a, b, c, d) {
        var e = this;
        d = d === void 0 ? !0 : d;
        var f = !1;
        return f
    }
    ZL.publicName = "setCookie";

    function $L(a) {}
    $L.F = "internal.setCorePlatformServices";

    function aM(a, b) {}
    aM.F = "internal.setDataLayerValue";

    function bM(a) {}
    bM.publicName = "setDefaultConsentState";

    function cM(a, b) {}
    cM.F = "internal.setDelegatedConsentType";

    function dM(a, b) {}
    dM.F = "internal.setFormAction";

    function eM(a, b, c) {
        c = c === void 0 ? !1 : c;
    }
    eM.F = "internal.setInCrossContainerData";

    function fM(a, b, c) {
        return !1
    }
    fM.publicName = "setInWindow";

    function gM(a, b, c) {}
    gM.F = "internal.setProductSettingsParameter";

    function hM(a, b, c) {}
    hM.F = "internal.setRemoteConfigParameter";
    var iM = {
            full_transmission: 0,
            limited_transmission: 1,
            no_transmission: 2
        },
        jM = {
            no_queue: 0,
            ads: 1,
            analytics: 2,
            monitoring: 3
        };

    function kM(a, b) {}
    kM.F = "internal.setTransmissionMode";

    function lM(a, b, c, d) {
        var e = this;
    }
    lM.publicName = "sha256";

    function mM(a, b, c) {}
    mM.F = "internal.sortRemoteConfigParameters";

    function nM(a, b) {
        var c = void 0;
        return c
    }
    nM.F = "internal.subscribeToCrossContainerData";
    var oM = {},
        pM = {};
    oM.getItem = function(a) {
        var b = null;
        return b
    };
    oM.setItem = function(a, b) {};
    oM.removeItem = function(a) {};
    oM.clear = function() {};
    oM.publicName = "templateStorage";

    function qM(a, b) {
        var c = !1;
        return c
    }
    qM.F = "internal.testRegex";

    function rM(a) {
        var b;
        return b
    };

    function sM(a) {
        var b;
        return b
    }
    sM.F = "internal.unsiloId";

    function tM(a, b) {
        var c;
        return c
    }
    tM.F = "internal.unsubscribeFromCrossContainerData";

    function uM(a) {}
    uM.publicName = "updateConsentState";
    var vM;

    function wM(a, b, c) {
        vM = vM || new vh;
        vM.add(a, b, c)
    }

    function xM(a, b) {
        var c = vM = vM || new vh;
        if (c.j.hasOwnProperty(a)) throw Error("Attempting to add a private function which already exists: " + a + ".");
        if (c.contains(a)) throw Error("Attempting to add a private function with an existing API name: " + a + ".");
        c.j[a] = $a(b) ? Sg(a, b) : Tg(a, b)
    }

    function yM() {
        return function(a) {
            var b;
            var c = vM;
            if (c.contains(a)) b = c.get(a, this);
            else {
                var d;
                if (d = c.j.hasOwnProperty(a)) {
                    var e = !1,
                        f = this.D.j;
                    if (f) {
                        var g = f.qb();
                        if (g) {
                            g.indexOf("__cvt_") !== 0 && (e = !0);
                        }
                    } else e = !0;
                    d = e
                }
                if (d) {
                    var k = c.j.hasOwnProperty(a) ? c.j[a] : void 0;
                    b = k
                } else throw Error(a + " is not a valid API name.");
            }
            return b
        }
    };

    function zM() {
        var a = function(c) {
                return void xM(c.F, c)
            },
            b = function(c) {
                return void wM(c.publicName, c)
            };
        b(GC);
        b(NC);
        b(bE);
        b(dE);
        b(eE);
        b(lE);
        b(nE);
        b(uE);
        b(xL());
        b(wE);
        b(OH);
        b(PH);
        b(hI);
        b(iI);
        b(jI);
        b(pI);
        b(eL);
        b(gL);
        b(nL);
        b(sL);
        b(BL);
        b(EL);
        b(HL);
        b(JL);
        b(LL);
        b(WL);
        b(ZL);
        b(bM);
        b(fM);
        b(lM);
        b(oM);
        b(uM);
        wM("Math", Xg());
        wM("Object", th);
        wM("TestHelper", yh());
        wM("assertApi", Ug);
        wM("assertThat", Vg);
        wM("decodeUri", Zg);
        wM("decodeUriComponent", $g);
        wM("encodeUri", ah);
        wM("encodeUriComponent", bh);
        wM("fail", gh);
        wM("generateRandom",
            hh);
        wM("getTimestamp", ih);
        wM("getTimestampMillis", ih);
        wM("getType", jh);
        wM("makeInteger", lh);
        wM("makeNumber", mh);
        wM("makeString", nh);
        wM("makeTableMap", oh);
        wM("mock", rh);
        wM("mockObject", sh);
        wM("fromBase64", JH, !("atob" in B));
        wM("localStorage", AL, !zL());
        wM("toBase64", rM, !("btoa" in B));
        a(FC);
        a(JC);
        a(dD);
        a(pD);
        a(wD);
        a(BD);
        a(RD);
        a($D);
        a(cE);
        a(fE);
        a(gE);
        a(hE);
        a(iE);
        a(jE);
        a(kE);
        a(mE);
        a(oE);
        a(tE);
        a(vE);
        a(xE);
        a(zE);
        a(AE);
        a(BE);
        a(CE);
        a(DE);
        a(IE);
        a(QE);
        a(RE);
        a(bF);
        a(gF);
        a(lF);
        a(uF);
        a(zF);
        a(MF);
        a(OF);
        a(bG);
        a(cG);
        a(eG);
        a(HH);
        a(IH);
        a(KH);
        a(LH);
        a(MH);
        a(QH);
        a(RH);
        a(SH);
        a(TH);
        a(UH);
        a(VH);
        a(WH);
        a(XH);
        a(YH);
        a(ZH);
        a($H);
        a(bI);
        a(cI);
        a(dI);
        a(eI);
        a(fI);
        a(gI);
        a(kI);
        a(lI);
        a(mI);
        a(nI);
        a(oI);
        a(rI);
        a(bL);
        a(hL);
        a(qL);
        a(rL);
        a(tL);
        a(uL);
        a(vL);
        a(wL);
        a(yL);
        a(PD);
        a(CL);
        a(DL);
        a(FL);
        a(GL);
        a(IL);
        a(KL);
        a(ML);
        a(NL);
        a(PL);
        a(QL);
        a(RL);
        a(xh);
        a(TL);
        a(UL);
        a(VL);
        a(XL);
        a(YL);
        a($L);
        a(aM);
        a(cM);
        a(dM);
        a(eM);
        a(gM);
        a(hM);
        a(kM);
        a(mM);
        a(nM);
        a(qM);
        a(sM);
        a(tM);
        xM("internal.CrossContainerSchema", yE());
        xM("internal.GtagSchema", cL());
        xM("internal.IframingStateSchema",
            fL());
        return yM()
    };
    var DC;

    function AM() {
        var a = data.sandboxed_scripts,
            b = data.security_groups;
        a: {
            var c = data.runtime || [],
                d = data.runtime_lines;DC = new De;BM();gf = CC();
            var e = DC,
                f = zM(),
                g = new cd("require", f);g.Ha();e.j.j.set("require", g);
            for (var k = [], m = 0; m < c.length; m++) {
                var n = c[m];
                if (!Array.isArray(n) || n.length < 3) {
                    if (n.length === 0) continue;
                    break a
                }
                d && d[m] && d[m].length && Df(n, d[m]);
                try {
                    DC.execute(n), T(118) && ok && n[0] === 50 && k.push(n[1])
                } catch (t) {}
            }
            T(118) && (uf = k)
        }
        if (a && a.length)
            for (var p = ["sandboxedScripts"], q = 0; q < a.length; q++) {
                var r = a[q].replace(/^_*/,
                    "");
                sj[r] = p
            }
        CM(b)
    }

    function BM() {
        DC.j.j.H = function(a, b, c) {
            Om.SANDBOXED_JS_SEMAPHORE = Om.SANDBOXED_JS_SEMAPHORE || 0;
            Om.SANDBOXED_JS_SEMAPHORE++;
            try {
                return a.apply(b, c)
            } finally {
                Om.SANDBOXED_JS_SEMAPHORE--
            }
        }
    }

    function CM(a) {
        a && hb(a, function(b, c) {
            for (var d = 0; d < c.length; d++) {
                var e = c[d].replace(/^_*/, "");
                sj[e] = sj[e] || [];
                sj[e].push(b)
            }
        })
    };

    function DM(a) {
        su(mu("developer_id." + a, !0), 0, {})
    };
    var EM = Array.isArray;

    function FM(a, b) {
        return Vc(a, b || null)
    }

    function X(a) {
        return window.encodeURIComponent(a)
    }

    function GM(a, b, c) {
        sc(a, b, c)
    }

    function HM(a, b) {
        if (!a) return !1;
        var c = Sj(Yj(a), "host");
        if (!c) return !1;
        for (var d = 0; b && d < b.length; d++) {
            var e = b[d] && b[d].toLowerCase();
            if (e) {
                var f = c.length - e.length;
                f > 0 && e.charAt(0) !== "." && (f--, e = "." + e);
                if (f >= 0 && c.indexOf(e, f) === f) return !0
            }
        }
        return !1
    }

    function IM(a, b, c) {
        for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
        return e ? d : null
    }
    var RM = B.clearTimeout,
        SM = B.setTimeout;

    function TM(a, b, c) {
        if (Zp()) {
            b && G(b)
        } else return nc(a, b, c)
    }

    function UM() {
        return B.location.href
    }

    function VM(a, b) {
        return Fj(a, b || 2)
    }

    function WM(a, b) {
        B[a] = b
    }

    function XM(a, b, c) {
        b && (B[a] === void 0 || c && !B[a]) && (B[a] = b);
        return B[a]
    }

    function YM(a, b) {
        if (Zp()) {
            b && G(b)
        } else pc(a, b)
    }
    var ZM = {};
    var Y = {
        securityGroups: {}
    };
    Y.securityGroups.f = ["google"], Y.__f = function(a) {
        var b = VM("gtm.referrer", 1) || F.referrer;
        return b ? a.vtp_component && a.vtp_component != "URL" ? Sj(Yj(String(b)), a.vtp_component, a.vtp_stripWww, a.vtp_defaultPages, a.vtp_queryKey) : Vj(Yj(String(b))) : String(b)
    }, Y.__f.o = "f", Y.__f.isVendorTemplate = !0, Y.__f.priorityOverride = 0, Y.__f.isInfrastructure = !0, Y.__f.runInSiloedMode = !1;

    Y.securityGroups.access_globals = ["google"],
        function() {
            function a(b, c, d) {
                var e = {
                    key: d,
                    read: !1,
                    write: !1,
                    execute: !1
                };
                switch (c) {
                    case "read":
                        e.read = !0;
                        break;
                    case "write":
                        e.write = !0;
                        break;
                    case "readwrite":
                        e.read = e.write = !0;
                        break;
                    case "execute":
                        e.execute = !0;
                        break;
                    default:
                        throw Error("Invalid " + b + " request " + c);
                }
                return e
            }(function(b) {
                Y.__access_globals = b;
                Y.__access_globals.o = "access_globals";
                Y.__access_globals.isVendorTemplate = !0;
                Y.__access_globals.priorityOverride = 0;
                Y.__access_globals.isInfrastructure = !1;
                Y.__access_globals.runInSiloedMode = !1
            })(function(b) {
                for (var c = b.vtp_keys || [], d = b.vtp_createPermissionError, e = [], f = [], g = [], k = 0; k < c.length; k++) {
                    var m = c[k],
                        n = m.key;
                    m.read && e.push(n);
                    m.write && f.push(n);
                    m.execute && g.push(n)
                }
                return {
                    assert: function(p, q, r) {
                        if (!z(r)) throw d(p, {}, "Key must be a string.");
                        if (q === "read") {
                            if (e.indexOf(r) > -1) return
                        } else if (q === "write") {
                            if (f.indexOf(r) > -1) return
                        } else if (q === "readwrite") {
                            if (f.indexOf(r) > -1 && e.indexOf(r) > -1) return
                        } else if (q === "execute") {
                            if (g.indexOf(r) > -1) return
                        } else throw d(p, {}, "Operation must be either 'read', 'write', or 'execute', was " + q);
                        throw d(p, {}, "Prohibited " + q + " on global variable: " + r + ".");
                    },
                    M: a
                }
            })
        }();
    Y.securityGroups.u = ["google"],
        function() {
            var a = function(b) {
                return {
                    toString: function() {
                        return b
                    }
                }
            };
            (function(b) {
                Y.__u = b;
                Y.__u.o = "u";
                Y.__u.isVendorTemplate = !0;
                Y.__u.priorityOverride = 0;
                Y.__u.isInfrastructure = !0;
                Y.__u.runInSiloedMode = !1
            })(function(b) {
                var c;
                c = (c = b.vtp_customUrlSource ? b.vtp_customUrlSource : VM("gtm.url", 1)) || UM();
                var d = b[a("vtp_component")];
                if (!d || d == "URL") return Vj(Yj(String(c)));
                var e = Yj(String(c)),
                    f;
                if (d === "QUERY") a: {
                    var g = b[a("vtp_multiQueryKeys").toString()],
                        k = b[a("vtp_queryKey").toString()] ||
                        "",
                        m = b[a("vtp_ignoreEmptyQueryParam").toString()],
                        n;n = g ? Array.isArray(k) ? k : String(k).replace(/\s+/g, "").split(",") : [String(k)];
                    for (var p = 0; p < n.length; p++) {
                        var q = Sj(e, "QUERY", void 0, void 0, n[p]);
                        if (q != void 0 && (!m || q !== "")) {
                            f = q;
                            break a
                        }
                    }
                    f = void 0
                }
                else f = Sj(e, d, d == "HOST" ? b[a("vtp_stripWww")] : void 0, d == "PATH" ? b[a("vtp_defaultPages")] : void 0);
                return f
            })
        }();
    Y.securityGroups.v = ["google"], Y.__v = function(a) {
        var b = a.vtp_name;
        if (!b || !b.replace) return !1;
        var c = VM(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1);
        return c !== void 0 ? c : a.vtp_defaultValue
    }, Y.__v.o = "v", Y.__v.isVendorTemplate = !0, Y.__v.priorityOverride = 0, Y.__v.isInfrastructure = !0, Y.__v.runInSiloedMode = !1;

    Y.securityGroups.read_event_data = ["google"],
        function() {
            function a(b, c) {
                return {
                    key: c
                }
            }(function(b) {
                Y.__read_event_data = b;
                Y.__read_event_data.o = "read_event_data";
                Y.__read_event_data.isVendorTemplate = !0;
                Y.__read_event_data.priorityOverride = 0;
                Y.__read_event_data.isInfrastructure = !1;
                Y.__read_event_data.runInSiloedMode = !1
            })(function(b) {
                var c = b.vtp_eventDataAccess,
                    d = b.vtp_keyPatterns || [],
                    e = b.vtp_createPermissionError;
                return {
                    assert: function(f, g) {
                        if (g != null && !z(g)) throw e(f, {
                            key: g
                        }, "Key must be a string.");
                        if (c !== "any") {
                            try {
                                if (c === "specific" && g != null && kg(g, d)) return
                            } catch (k) {
                                throw e(f, {
                                    key: g
                                }, "Invalid key filter.");
                            }
                            throw e(f, {
                                key: g
                            }, "Prohibited read from event data.");
                        }
                    },
                    M: a
                }
            })
        }();



    Y.securityGroups.gaawe = ["google"],
        function() {
            function a(f, g, k) {
                for (var m = 0; m < g.length; m++) f.hasOwnProperty(g[m]) && (f[g[m]] = k(f[g[m]]))
            }

            function b(f, g, k) {
                var m = {},
                    n = function(v, u) {
                        m[v] = m[v] || u
                    },
                    p = function(v, u, w) {
                        w = w === void 0 ? !1 : w;
                        c.push(6);
                        if (v) {
                            m.items = m.items || [];
                            for (var y = {}, x = 0; x < v.length; y = {
                                    pf: void 0
                                }, x++) y.pf = {}, hb(v[x], function(C) {
                                return function(D, E) {
                                    w && D === "id" ? C.pf.promotion_id = E : w && D === "name" ? C.pf.promotion_name = E : C.pf[D] = E
                                }
                            }(y)), m.items.push(y.pf)
                        }
                        if (u)
                            for (var A in u) d.hasOwnProperty(A) ? n(d[A],
                                u[A]) : n(A, u[A])
                    },
                    q;
                f.vtp_getEcommerceDataFrom === "dataLayer" ? (q = f.vtp_gtmCachedValues.eventModel) || (q = f.vtp_gtmCachedValues.ecommerce) : (q = f.vtp_ecommerceMacroData, Uc(q) && q.ecommerce && !q.items && (q = q.ecommerce));
                if (Uc(q)) {
                    var r = !1,
                        t;
                    for (t in q) q.hasOwnProperty(t) && (r || (c.push(5), r = !0), t === "currencyCode" ? n("currency", q.currencyCode) : t === "impressions" && g === Q.g.tb ? p(q.impressions, null) : t === "promoClick" && g === Q.g.Nb ? p(q.promoClick.promotions, q.promoClick.actionField, !0) : t === "promoView" && g === Q.g.ub ? p(q.promoView.promotions,
                        q.promoView.actionField, !0) : e.hasOwnProperty(t) ? g === e[t] && p(q[t].products, q[t].actionField) : m[t] = q[t]);
                    FM(m, k)
                }
            }
            var c = [],
                d = {
                    id: "transaction_id",
                    revenue: "value",
                    list: "item_list_name"
                },
                e = {
                    click: "select_item",
                    detail: "view_item",
                    add: "add_to_cart",
                    remove: "remove_from_cart",
                    checkout: "begin_checkout",
                    checkout_option: "checkout_option",
                    purchase: "purchase",
                    refund: "refund"
                };
            (function(f) {
                Y.__gaawe = f;
                Y.__gaawe.o = "gaawe";
                Y.__gaawe.isVendorTemplate = !0;
                Y.__gaawe.priorityOverride = 0;
                Y.__gaawe.isInfrastructure = !1;
                Y.__gaawe.runInSiloedMode = !1
            })(function(f) {
                var g;
                g = f.vtp_migratedToV2 ? String(f.vtp_measurementIdOverride) : String(f.vtp_measurementIdOverride || f.vtp_measurementId);
                if (z(g) && g.indexOf("G-") === 0) {
                    var k = String(f.vtp_eventName),
                        m = {};
                    c = [];
                    f.vtp_sendEcommerceData && (Eh.hasOwnProperty(k) || k === "checkout_option") && b(f, k, m);
                    var n = f.vtp_eventSettingsVariable;
                    if (n)
                        for (var p in n) n.hasOwnProperty(p) && (m[p] = n[p]);
                    if (f.vtp_eventSettingsTable) {
                        var q = IM(f.vtp_eventSettingsTable, "parameter", "parameterValue"),
                            r;
                        for (r in q) m[r] = q[r]
                    }
                    var t = IM(f.vtp_eventParameters,
                            "name", "value"),
                        v;
                    for (v in t) t.hasOwnProperty(v) && (m[v] = t[v]);
                    var u = f.vtp_userDataVariable;
                    u && (m[Q.g.Da] = u);
                    if (m.hasOwnProperty(Q.g.pb) || f.vtp_userProperties) {
                        var w = m[Q.g.pb] || {};
                        FM(IM(f.vtp_userProperties, "name", "value"), w);
                        m[Q.g.pb] = w
                    }
                    var y = {
                        originatingEntity: Pz(1, f.vtp_gtmEntityIndex, f.vtp_gtmEntityName)
                    };
                    if (c.length > 0) {
                        var x = {};
                        y.eventMetadata = (x.event_usage = c, x)
                    }
                    a(m, Fh, function(C) {
                        return kb(C)
                    });
                    a(m, Hh, function(C) {
                        return Number(C)
                    });
                    var A = f.vtp_gtmEventId;
                    y.noGtmEvent = !0;
                    su(pu(g, k, m), A, y);
                    G(f.vtp_gtmOnSuccess)
                } else G(f.vtp_gtmOnFailure)
            })
        }();



    Y.securityGroups.load_google_tags = ["google"],
        function() {
            function a(b, c, d) {
                return {
                    tagId: c,
                    firstPartyUrl: d
                }
            }(function(b) {
                Y.__load_google_tags = b;
                Y.__load_google_tags.o = "load_google_tags";
                Y.__load_google_tags.isVendorTemplate = !0;
                Y.__load_google_tags.priorityOverride = 0;
                Y.__load_google_tags.isInfrastructure = !1;
                Y.__load_google_tags.runInSiloedMode = !1
            })(function(b) {
                var c = b.vtp_allowedTagIds || "specific",
                    d = b.vtp_allowFirstPartyUrls || !1,
                    e = b.vtp_allowedFirstPartyUrls || "specific",
                    f = b.vtp_urls || [],
                    g = b.vtp_tagIds || [],
                    k = b.vtp_createPermissionError;
                return {
                    assert: function(m, n, p) {
                        (function(q) {
                            if (!z(q)) throw k(m, {}, "Tag ID must be a string.");
                            if (c !== "any" && (c !== "specific" || g.indexOf(q) === -1)) throw k(m, {}, "Prohibited Tag ID: " + q + ".");
                        })(n);
                        (function(q) {
                            if (q !== void 0) {
                                if (!z(q)) throw k(m, {}, "First party URL must be a string.");
                                if (d) {
                                    if (e === "any") return;
                                    if (e === "specific") try {
                                        if (Bg(Yj(q), f)) return
                                    } catch (r) {
                                        throw k(m, {}, "Invalid first party URL filter.");
                                    }
                                }
                                throw k(m, {}, "Prohibited first party URL: " + q);
                            }
                        })(p)
                    },
                    M: a
                }
            })
        }();







    Y.securityGroups.remm = ["google"], Y.__remm = function(a) {
        for (var b = a.vtp_input, c = a.vtp_map || [], d = a.vtp_fullMatch, e = a.vtp_ignoreCase ? "gi" : "g", f = a.vtp_defaultValue, g = 0; g < c.length; g++) {
            var k = c[g].key || "";
            d && (k = "^" + k + "$");
            var m = new RegExp(k, e);
            if (m.test(b)) {
                var n = c[g].value;
                a.vtp_replaceAfterMatch && (n = String(b).replace(m, n));
                f = n;
                break
            }
        }
        return f
    }, Y.__remm.o = "remm", Y.__remm.isVendorTemplate = !0, Y.__remm.priorityOverride = 0, Y.__remm.isInfrastructure = !0, Y.__remm.runInSiloedMode = !1;

    Y.securityGroups.logging = ["google"],
        function() {
            function a() {
                return {}
            }(function(b) {
                Y.__logging = b;
                Y.__logging.o = "logging";
                Y.__logging.isVendorTemplate = !0;
                Y.__logging.priorityOverride = 0;
                Y.__logging.isInfrastructure = !1;
                Y.__logging.runInSiloedMode = !1
            })(function(b) {
                var c = b.vtp_environments || "debug",
                    d = b.vtp_createPermissionError;
                return {
                    assert: function(e) {
                        var f;
                        if (f = c !== "all" && !0) {
                            var g = !1;
                            f = !g
                        }
                        if (f) throw d(e, {}, "Logging is not enabled in all environments");
                    },
                    M: a
                }
            })
        }();

    Y.securityGroups.configure_google_tags = ["google"],
        function() {
            function a(b, c, d) {
                return {
                    tagId: c,
                    configuration: d
                }
            }(function(b) {
                Y.__configure_google_tags = b;
                Y.__configure_google_tags.o = "configure_google_tags";
                Y.__configure_google_tags.isVendorTemplate = !0;
                Y.__configure_google_tags.priorityOverride = 0;
                Y.__configure_google_tags.isInfrastructure = !1;
                Y.__configure_google_tags.runInSiloedMode = !1
            })(function(b) {
                var c = b.vtp_allowedTagIds || "specific",
                    d = b.vtp_tagIds || [],
                    e = b.vtp_createPermissionError;
                return {
                    assert: function(f,
                        g) {
                        if (!z(g)) throw e(f, {}, "Tag ID must be a string.");
                        if (c !== "any" && (c !== "specific" || d.indexOf(g) === -1)) throw e(f, {}, "Prohibited configuration for Tag ID: " + g + ".");
                    },
                    M: a
                }
            })
        }();





    var Rm = {
        dataLayer: Gj,
        callback: function(a) {
            rj.hasOwnProperty(a) && $a(rj[a]) && rj[a]();
            delete rj[a]
        },
        bootstrap: 0
    };

    function $M() {
        Qm();
        Sk();
        Kz();
        rb(sj, Y.securityGroups);
        var a = Mk(Nk()),
            b, c = a == null ? void 0 : (b = a.context) == null ? void 0 : b.source;
        pm(c, a == null ? void 0 : a.parent);
        c !== 2 && c !== 4 && c !== 3 || U(142);
        tf = {
            am: Kf
        }
    }
    var aN = !1;
    (function(a) {
        function b() {
            n = F.documentElement.getAttribute("data-tag-assistant-present");
            cm(n) && (m = k.Jj)
        }

        function c() {
            m && gc ? g(m) : a()
        }
        if (!B["__TAGGY_INSTALLED"]) {
            var d = !1;
            if (F.referrer) {
                var e = Yj(F.referrer);
                d = Uj(e, "host") === "cct.google"
            }
            if (!d) {
                var f = dq("googTaggyReferrer");
                d = !(!f.length || !f[0].length)
            }
            d && (B["__TAGGY_INSTALLED"] = !0, nc("https://cct.google/taggy/agent.js"))
        }
        var g = function(v) {
                var u = "GTM",
                    w = "GTM";
                ij && (u = "OGT", w = "GTAG");
                var y = B["google.tagmanager.debugui2.queue"];
                y || (y = [], B["google.tagmanager.debugui2.queue"] = y, nc("https://" + cj.Af + "/debug/bootstrap?id=" + Qf.ctid + "&src=" + w + "&cond=" + v + "&gtm=" + aq()));
                var x = {
                    messageType: "CONTAINER_STARTING",
                    data: {
                        scriptSource: gc,
                        containerProduct: u,
                        debug: !1,
                        id: Qf.ctid,
                        targetRef: {
                            ctid: Qf.ctid,
                            isDestination: Bk()
                        },
                        aliases: Ek(),
                        destinations: Ck()
                    }
                };
                x.data.resume = function() {
                    a()
                };
                cj.Zk && (x.data.initialPublish = !0);
                y.push(x)
            },
            k = {
                Dl: 1,
                Lj: 2,
                Yj: 3,
                Li: 4,
                Jj: 5
            };
        k[k.Dl] = "GTM_DEBUG_LEGACY_PARAM";
        k[k.Lj] = "GTM_DEBUG_PARAM";
        k[k.Yj] = "REFERRER";
        k[k.Li] = "COOKIE";
        k[k.Jj] = "EXTENSION_PARAM";
        var m = void 0,
            n = void 0,
            p = Sj(B.location, "query", !1, void 0, "gtm_debug");
        cm(p) && (m = k.Lj);
        if (!m && F.referrer) {
            var q = Yj(F.referrer);
            Uj(q, "host") === "tagassistant.google.com" && (m = k.Yj)
        }
        if (!m) {
            var r = dq("__TAG_ASSISTANT");
            r.length && r[0].length && (m = k.Li)
        }
        m || b();
        if (!m && bm(n)) {
            var t = !1;
            tc(F, "TADebugSignal", function() {
                t || (t = !0, b(), c())
            }, !1);
            B.setTimeout(function() {
                t || (t = !0, b(), c())
            }, 200)
        } else c()
    })(function() {
        try {
            if (aN || !al()) {
                xj();
                vj.K = "";
                vj.sc = "ad_storage|analytics_storage|ad_user_data|ad_personalization";
                vj.fb = "ad_storage|analytics_storage|ad_user_data";
                vj.qa = "5230";
                vj.qa = "5230";
                Qk();
                if (T(103)) {}
                ii[8] = !0;
                var a = Pm("debugGroupId", function() {
                    return String(Math.floor(Number.MAX_SAFE_INTEGER *
                        Math.random()))
                });
                wm(a);
                Nm();
                Bp();
                bn();
                if (Tk()) {
                    MD();
                    vz().removeExternalRestrictions(Kk());
                } else {
                    Dw();
                    Gz();
                    rf();
                    nf = Y; of = qC;
                    Mf = new Tf;
                    AM();
                    $M();
                    Tl = Ul();
                    Km();
                    JB();
                    WA();
                    pB = !1;
                    F.readyState === "complete" ? rB() : tc(B, "load", rB);
                    PA();
                    ok && ($n(oo), B.setInterval(no,
                        864E5), $n(tC), $n(mA), $n(Tx), $n(ro), $n(zC), $n(xA), T(118) && ($n(rA), $n(sA), $n(tA)), uC());
                    pk && (ql(), vn(), QA(), MB(), KB(), T(42) && (hl("bt", String(vj.j ? 2 : kj ? 1 : 0)), hl("ct", String(vj.j ? 0 : kj ? 1 : Zp() ? 2 : 3))));
                    gC();
                    Rl(1);
                    ND();
                    qj = ob();
                    Rm.bootstrap = qj;
                    vj.H && IB();
                    if (T(103)) {}
                    T(132) &&
                        (typeof B.name === "string" && tb(B.name, "web-pixel-sandbox-CUSTOM") && Ic() ? DM("dMDg0Yz") : B.Shopify && Ic() && DM("dNTU0Yz"))
                }
            }
        } catch (b) {
            Rl(4), ko()
        }
    });

})()