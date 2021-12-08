import {
    IExecuteFunctions,
} from 'n8n-core';

import {
    IDataObject,
    INodeExecutionData,
    INodeType,
    INodeTypeDescription,
} from 'n8n-workflow';

import {
    OptionsWithUri,
} from 'request';

export class Payments implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'Payments',
        name: 'Payments',
        icon: 'file:payments.svg',
        group: ['transform'],
        version: 1,
        subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
        description: 'Consume Payments API',
        
        defaults: {
            name: 'Payments',
            color: '#1A82e2',
        },
        inputs: ['main'],
        outputs: ['main'],
        credentials: [
        ],
        
        properties: [
            {
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				options: [
					{
						name: 'Contact',
						value: 'contact',
					},
				],
				default: 'contact',
				required: true,
				description: 'Resource to consume',
			},
            {
                displayName: 'Operation',
                name: 'operation',
                type: 'options',
                displayOptions: {
                  show: {
                    resource: [
                      'contact',
                    ],
                  },
                },
                options: [
                  {
                    name: 'Create',
                    value: 'create',
                    description: 'Create a contact',
                  },
                ],
                default: 'create',
                description: 'The operation to perform.',
              },
           //  {
           //    displayName: 'Additional Fields',
           //    name: 'additionalFields',
           //    type: 'collection',
           //    placeholder: 'Add Field',
           //    default: {},
           //    displayOptions: {
           //      show: {
           //        resource: [
           //          'contact',
           //        ],
           //        operation: [
           //          'create',
           //        ],
           //      },
           //    },
           //    options: [
           //      {
           //        displayName: 'First Name',
           //        name: 'firstName',
           //        type: 'string',
           //        default: '',
           //      },
           //      {
           //        displayName: 'Last Name',
           //        name: 'lastName',
           //        type: 'string',
           //        default: '',
           //      },
           //    ],
           //  },
  
        ],

    };
    

    async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
        return [[]];
    }
}
 