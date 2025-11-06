import React from 'react';
import type { School } from '../types/school';

interface CompareModalProps {
  compareList: School[];
  onClose: () => void;
  onRemove: (schoolCode: string) => void;
  onClearAll: () => void;
}

const CompareModal: React.FC<CompareModalProps> = ({
  compareList,
  onClose,
  onRemove,
  onClearAll
}) => {
  const [copiedId, setCopiedId] = React.useState<string | null>(null);

  const handleCopyCode = (school: School) => {
    navigator.clipboard.writeText(school.code);
    setCopiedId(school.code);
    setTimeout(() => setCopiedId(null), 2000);
  };
  return (
    <div className="mcf-modal-overlay" onClick={onClose}>
      <div className="mcf-modal mcf-compare-modal" onClick={(e) => e.stopPropagation()}>
        <div className="mcf-modal-header">
          <h2 className="mcf-modal-title">
            Compare Schools ({compareList.length}/5)
          </h2>
          <div className="mcf-modal-actions">
            {compareList.length > 0 && (
              <button
                className="mcf-btn mcf-btn-secondary"
                onClick={onClearAll}
                aria-label="Clear all schools from comparison"
              >
                Clear All
              </button>
            )}
            <button
              className="mcf-modal-close"
              onClick={onClose}
              aria-label="Close compare modal"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="mcf-modal-content">
          {compareList.length === 0 ? (
            <div className="mcf-empty-state">
              <div className="mcf-empty-icon" aria-hidden="true">
                📊
              </div>
              <h3 className="mcf-empty-title">No Schools Selected</h3>
              <p className="mcf-empty-text">
                Select schools from the search results to compare them side-by-side.
                You can compare up to 5 schools at once.
              </p>
            </div>
          ) : (
            <div className="mcf-compare-grid">
              {compareList.map((school) => (
                <div key={school.code} className="mcf-compare-card">
                  <div className="mcf-compare-card-header">
                    <h3 className="mcf-compare-card-title">{school.name}</h3>
                    <button
                      className="mcf-compare-remove-btn"
                      onClick={() => onRemove(school.code)}
                      aria-label={`Remove ${school.name} from comparison`}
                      title="Remove from comparison"
                    >
                      ✕
                    </button>
                  </div>

                  <div className="mcf-compare-card-body">
                    <div className="mcf-compare-field">
                      <dt className="mcf-compare-label">School Code</dt>
                      <dd className="mcf-compare-value">{school.code}</dd>
                    </div>

                    <div className="mcf-compare-field">
                      <dt className="mcf-compare-label">Address</dt>
                      <dd className="mcf-compare-value">
                        {school.address || 'N/A'}
                      </dd>
                    </div>

                    <div className="mcf-compare-field">
                      <dt className="mcf-compare-label">City</dt>
                      <dd className="mcf-compare-value">{school.city}</dd>
                    </div>

                    <div className="mcf-compare-field">
                      <dt className="mcf-compare-label">State</dt>
                      <dd className="mcf-compare-value">{school.state}</dd>
                    </div>

                    <div className="mcf-compare-field">
                      <dt className="mcf-compare-label">Zip Code</dt>
                      <dd className="mcf-compare-value">
                        {school.zip || school.postalCode || 'N/A'}
                      </dd>
                    </div>

                    <div className="mcf-compare-field">
                      <dt className="mcf-compare-label">Country</dt>
                      <dd className="mcf-compare-value">{school.country}</dd>
                    </div>
                  </div>

                  <div className="mcf-compare-card-footer">
                    <button
                      className="mcf-btn mcf-btn-sm"
                      onClick={() => handleCopyCode(school)}
                      aria-label={`Copy code for ${school.name}`}
                    >
                      {copiedId === school.code ? '✓ Copied!' : '📋 Copy Code'}
                    </button>
                    <button
                      className="mcf-btn mcf-btn-sm"
                      onClick={() => {
                        const searchQuery = encodeURIComponent(`${school.name} ${school.city} ${school.state}`);
                        window.open(`https://www.google.com/search?q=${searchQuery}`, '_blank');
                      }}
                      aria-label={`Search for ${school.name} online`}
                    >
                      🔍 Search Web
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {compareList.length > 0 && compareList.length < 5 && (
            <div className="mcf-compare-hint">
              💡 You can add up to {5 - compareList.length} more {compareList.length === 4 ? 'school' : 'schools'} to compare
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompareModal;
