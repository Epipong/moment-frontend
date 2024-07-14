const MyLabel = ({ label, value }: { label: string; value?: string }) => {
  return (
    <>
      <div className="col-sm-3">
        <p className="mb-0">{label}</p>
      </div>
      <div className="col-sm-9">
        <p className="text-muted mb-0">{value}</p>
      </div>
    </>
  );
};

export { MyLabel };
