export type Severity = 'Critical' | 'High' | 'Medium' | 'Low'
export const metrics = [
 { label: 'Security score', value: '78', suffix: '/100', change: '+6.4%', note: 'vs previous month', good: true },
 { label: 'Open findings', value: '43', suffix: '', change: '−8.2%', note: 'vs previous month', good: true },
 { label: 'Critical risks', value: '4', suffix: '', change: '+1', note: 'requires attention', good: false },
 { label: 'Estimated exposure', value: '€245k', suffix: '', change: '−12%', note: 'potential impact', good: true },
]
export const trend = [
 { month: 'May', score: 61 }, { month: 'Jun', score: 64 }, { month: 'Jul', score: 62 },
 { month: 'Aug', score: 69 }, { month: 'Sep', score: 71 }, { month: 'Oct', score: 75 }, { month: 'Nov', score: 78 },
]
export const severityData = [
 { name: 'Critical', value: 4, color: '#fb7185' }, { name: 'High', value: 12, color: '#fb923c' },
 { name: 'Medium', value: 18, color: '#fbbf24' }, { name: 'Low', value: 9, color: '#60a5fa' },
]
export const findings = [
 { id: 'R-1048', title: 'Multi-factor authentication not enforced', asset: 'Workforce identity tenant', severity: 'Critical' as Severity, status: 'Open', owner: 'Platform team', exposure: '€48,000' },
 { id: 'R-1042', title: 'Publicly accessible storage bucket', asset: 'customer-archive-prod', severity: 'Critical' as Severity, status: 'In progress', owner: 'Cloud team', exposure: '€72,000' },
 { id: 'R-1037', title: 'Unsupported operating system detected', asset: 'FIN-WKS-022', severity: 'High' as Severity, status: 'Open', owner: 'IT operations', exposure: '€18,000' },
 { id: 'R-1031', title: 'Privileged account review overdue', asset: 'Core directory services', severity: 'High' as Severity, status: 'In progress', owner: 'Platform team', exposure: '€24,000' },
 { id: 'R-1026', title: 'Missing security headers on web portal', asset: 'Customer portal', severity: 'Medium' as Severity, status: 'Open', owner: 'Web team', exposure: '€8,500' },
 { id: 'R-1019', title: 'Backup restoration test not recorded', asset: 'Backup environment', severity: 'Medium' as Severity, status: 'Open', owner: 'IT operations', exposure: '€12,000' },
 { id: 'R-1012', title: 'TLS configuration can be strengthened', asset: 'api.example.internal', severity: 'Low' as Severity, status: 'Resolved', owner: 'Web team', exposure: '€2,000' },
]
export const controls = [
 { name: 'Identity & access management', group: 'Access', score: 92, status: 'Healthy', description: 'MFA coverage, access policies and privileged account reviews.' },
 { name: 'Asset management', group: 'Governance', score: 74, status: 'Needs attention', description: 'Inventory completeness, asset ownership and lifecycle tracking.' },
 { name: 'Incident response', group: 'Resilience', score: 48, status: 'At risk', description: 'Response plans, escalation paths and exercise cadence.' },
 { name: 'Data protection', group: 'Data', score: 86, status: 'Healthy', description: 'Encryption, retention and sensitive-data handling.' },
 { name: 'Network security', group: 'Infrastructure', score: 61, status: 'Needs attention', description: 'Segmentation, perimeter controls and monitoring.' },
 { name: 'Vulnerability management', group: 'Operations', score: 69, status: 'Needs attention', description: 'Scanning coverage, remediation SLAs and exceptions.' },
]
